<template lang="pug">

.site-nav
    div( class='block' )
        div( class='bread-crumbs' )
            router-link( class='crumb' to='/' tag='span' ) Главная

            span( :v-if='catalog()' )
                span( class='arrow' ) ->
                router-link( class='crumb' to='/' tag='span' ) Спальни

            span( :v-if='item()' )
                span( class='arrow' ) ->
                router-link( class='crumb' to='/' tag='span' ) Мария; 1600x2000мм
            

</template>

<script>
export default {
    methods: { inside, catalog, item },
    mounted: init,
    data: function () {
        return {
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
}

function inside (...pages) {
    var list = [];
    var route = this.$router.currentRoute;

    pages.forEach(page => list.push('|' + page));

    console.log(
        list.join(''), `|${ route.name }`,
        list.join('').search(`|${ route.name }`)
    )

    return list.join('').search(`|${ route.name }`) >= 0;
}

function catalog () {
    return this.inside('catalog', 'item');
}

function item () {
    return this.inside('item')
}
</script>

<style lang="stylus">
@import '~@/style/palette'

.site-nav
    position absolute
    left 0
    right 0
    top 200px
    z-index 5
</style>
