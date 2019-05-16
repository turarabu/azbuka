<template lang="pug">

div( class='block' )
    div( class='cart-list-header' )
        h3( class='head' ) Фото товара
        h3( class='head' ) Название
        h3( class='head' ) Количество
        h3( class='head' ) Цена
        h3( class='head' ) Сборка
        h3( class='head' ) Стоимость

    div( v-for='(item, index) in cart()' )
        div( class='cart-item' )
            div( class='image-container' )
                img( class='image' :src='item.images[0]' )

            div( class='description' )
                div( class='description-container' )
                    h3( class='name' ) {{ item.name }}
                    span( class='meta' v-for='spec in item.specs' ) {{ spec[0] }}: {{ spec[1] }};

            div( class='count-container' )
                span( class='count-change' @click='setCount("sub", index)' )
                span( class='count' ) {{ item.count }}
                span( class='count-change add' @click='setCount("add", index)' )

            span( class='price' ) {{ item.prices.current }} {{ item.prices.append }}

            div( class='build options' )
                label( class='label' )
                    input( class='input' type='checkbox' @change='build($event, index)' )
                    span( class='status' )
                    span( class='text' ) {{ item.build === true ? 'Да' : 'Нет' }}

            span( class='total' ) {{ item.prices.current * item.count }} {{ item.prices.append }}
            i( class='delete fas fa-trash' @click='trash(index)' )

    CartCount( :cart='cart()' )
</template>

<script>
import CartCount from '@/components/Cart/CartCount.vue'

export default {
    components: { CartCount },
    computed: { catalog },
    methods: { cart, getItem, getWidthSpecs, setCount, build, trash },
    data: function () {
        return {}
    }
}

function catalog () {
    return this.$store.getters.catalog
}

function cart () {
    var self = this;
    var result = [];

    this.$store.state.cart.forEach(function (item) {
        result.push( self.getWidthSpecs(item) ); 
    });

    return result;
}

function getItem (item) {
    for (let i = 0; i != this.catalog.length; ++i) {
        if ( this.catalog[i].id === item.id )
            return this.catalog[i];
    }
    
    return {};
}

function getWidthSpecs (item) {
    var target = this.getItem(item);
    var push = {specs: []};

    target.specsKeys.forEach(function (spec, index) {
        push.specs.push([
            spec[1],
            target.specsVals[index][ item.specs[spec[0]] ]
        ]);
    });


    return assign(item, target, push)
}

function setCount (set, index) {
    var count = (set === 'add') ? 1 : -1;

    this.$store.commit('add-count', { index, count });
    return this.$forceUpdate();
}

function build (event, index) {
    var build = event.target.checked;

    this.$store.commit('set-build', { index, build });
    return this.$forceUpdate();
}

async function trash (index) {
    var confirm = await document.confirm('Удалить товары из корзины?')

    if (confirm === true)
        this.$store.commit('remove-item', index);

    this.$parent.$forceUpdate();
}

function assign (...data) {
    var result = {};

    data.forEach(function (object) {
        Object.assign(result, JSON.parse( JSON.stringify(object) ));
    });

    return result;
}
</script>

<style lang="stylus" scoped>
@import '~@/style/palette'

.cart-list-header
    border-bottom 1px dashed $white-gray
    padding 16px 0 28px 0
    text-align center

    .head
        color $white-gray
        font-size 16px
        font-weight 500

.cart-item, .cart-list-header
    align-items center
    border-bottom 1px dashed $white-gray
    display grid
    grid-template-columns 220px auto 320px 160px 160px 180px 40px
    grid-column-gap 16px
    margin-top 18px
    padding 16px 0 28px 0
    width 100%

    & > *
        text-align center

    .image-container
        text-align center
        width 100%

        .image
            width 75%

    .description
        text-align center

    .description-container
        display inline-block
        text-align left
        width 525px

    .meta
        color $white-gray
        display inline-block
        margin-right 6px

    .count-container
        align-items center
        display flex
        justify-content center
        margin 4px 0
        padding 2px 0

    .count
        display inline-block
        font-size 20px
        margin 0 16px
        text-align center
        width 32px

    .count-change
        border 1px solid $black
        border-radius 25px
        display inline-block
        cursor pointer
        font-size 24px
        padding 2px 24px
        vertical-align middle
        &:after
            display inline-block
            content '–'
            position relative
            top -3px
        &.add:after
            content '+'
            top -1px

    .build .label
        margin 0 auto
        width 70px

    .delete
        color $red
        cursor pointer
        font-size 24px
        margin-right 8px
</style>
