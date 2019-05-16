<template lang="pug">

div( class='site-nav block' v-if='$router.currentRoute.name !== "home"' )
    div( class='bread-crumbs' )
        button( class='back' @click='$router.back(1)' )
            i( class='fas fa-angle-left' )
            span Назад

        router-link( class='crumb' to='/' tag='span' ) Главная

        span( v-if='catalog()')
            span( class='delimiter fas fa-long-arrow-alt-right' )
            router-link( class='crumb' to='/catalog/bedrooms' tag='span' ) Спальни

        span( v-if='cart()')
            span( class='delimiter fas fa-long-arrow-alt-right' )
            span( class='crumb' ) Корзина

        span( v-if='item()' )
            span( class='delimiter fas fa-long-arrow-alt-right' )
            span( class='crumb' ) Мария; 1600x2000мм
            
    div( class='right' v-if='$router.currentRoute.name === "catalog"'  )
        label( class='search-container' )
            i( class='icon icon-search' )
            input( class='input' placeholder='Поиск' v-model='search' @keyup='changed' )

        button( class='filter-button' @click='$store.commit("toggle-filter")' )
            span Подобрать по парметрам
            i( class='icon icon-filter' )

</template>

<script>
export default {
    methods: { inside, catalog, item, cart, changed },
    mounted: init,
    data: function () {
        return {
            timeout: false,
            search: '',
            route: this.$router.currentRoute,
            check: true
        }
    }
}

function init () {
    var self = this;

    this.$router.afterEach(function () {
        self.$forceUpdate();
    });

    this.event = new Event('search-update');
}

function inside (...pages) {
    var list = [];
    var route = this.$router.currentRoute;

    pages.forEach(page => list.push('|' + page));

    return list.join('').includes(`|${ route.name }`);
}

function catalog () {
    return this.inside('catalog', 'item');
}

function item () {
    return this.inside('item');
}

function cart () {
    return this.inside('cart');
}

function changed (event) {
    if (event.key.length > 1 && event.keyCode !== 8)
        return;
    
    if (this.timeout !== false)
        clearTimeout(this.timeout);
    
    var self = this;
    this.timeout = setTimeout(function () {
        self.$store.commit('catalog-filter', {
            key: 'name',
            type: 'search',
            value: self.search
        });

        document.dispatchEvent(self.event);
        self.timeout = false;
    }, 1000);
}
</script>

<style lang="stylus">
@import '~@/style/palette'

.site-nav
    align-items center
    display flex
    justify-content space-between
    padding-top 16px
    position absolute
    left 0
    right 0
    top 200px
    z-index 5

    .back
        background $red
        border none
        border-radius 50px
        color $white
        cursor pointer
        font-size 16px
        margin-right 24px
        outline none
        height 36px
        width 100px

        .fas
            display inline-block
            margin-right 6px

    .bread-crumbs
        width 50%

    .crumb
        font-size 16px
        font-weight bold

    .delimiter
        display inline-block
        font-size 14px
        margin 0 6px

    .right
        align-items center
        display flex
        justify-content space-between
        width 49%

    .search-container
        display inline-block
        position relative
        width 40%

        .icon
            color $white-gray
            font-size 16px
            position absolute
            top 9px
            left 14px

        .input
            border 1px solid $white-gray
            border-radius 25px
            font-size 16px
            outline none
            padding 6px 12px 6px 38px
            width 100%
            &:focus
                border-color $black

    .filter-button
        background $white
        border none
        cursor pointer
        font-size 16px
        font-weight bold
        outline none
        margin-right calc(45% / 2 - 120px)
        // margin-left calc(25% / 2 - 115px)
        width 240px

        .icon
            display inline-block
            margin-left 8px
            transform rotateZ(90deg)

</style>
