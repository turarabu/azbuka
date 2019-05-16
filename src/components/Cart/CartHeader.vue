<template lang="pug">
    
div( class='block' )
    div( class='piggy-bank' )
        i( class='icon icon-piggy-bank' )
        span Мои покупки

    div( class='cart-nav' )
        router-link( class='crumb' tag='span' active-class='active' to='/cart/items' ) Список товаров
        i( class='delimiter fas fa-angle-right' )

        router-link( class='crumb' tag='span' active-class='active' to='/cart/assembly' ) Сборка и доставка
        i( class='delimiter fas fa-angle-right' )

        router-link( class='crumb' tag='span' active-class='active' to='/cart/contacts' ) Контакты
        i( class='delimiter fas fa-angle-right' )

        router-link( class='crumb' tag='span' active-class='active' to='/cart/bouses' ) Бонусная карта

        div( class='trash-all' @click='trash' )
            span Очистить корзину
            i( class='trash fas fa-trash' )

</template>

<script>
export default {
    methods: { trash }
}

async function trash () {
    var confirm = await document.confirm('Удалить все товары из корзины?')

    if (confirm === true)
        this.$store.commit('reset', 'cart');

    this.$parent.$forceUpdate();
}
</script>


<style lang="stylus" scoped>
@import '~@/style/palette'

.piggy-bank
    align-items center
    color $white-gray
    display flex
    font-size 26px
    justify-content center

    .icon
        display inline-block
        font-size 48px
        margin-right 12px

.cart-nav
    align-items center
    display flex
    justify-content center
    margin 32px 0
    position relative

    .crumb
        background $white
        border 1px solid $red
        border-radius 50px
        display inline-block
        font-size 20px
        padding 6px 24px
        &.active
            background $red
            color $white

    .delimiter
        display inline-block
        margin 0 12px

    .trash-all
        align-items center
        display flex
        color $white-gray
        cursor pointer
        font-size 18px
        position absolute
        top 4px
        right 8px

        .trash
            display inline-block
            color $red
            font-size 20px
            margin-left 16px
</style>

