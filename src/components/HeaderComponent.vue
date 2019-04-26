<template lang="pug">

header#header
    div( class='container block' )
        img( class='logo' src='~@/assets/img/logo.png' )
        span( class='header-text' ) Больше выбора | 
            span( class='bold' ) Только выгода

        div( class='cart-container' )
            span( class='cart-text' ) Корзина
            span( class='cart-button' )
                i( class='icon icon-cart' )

    HeaderNav
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue'

export default {
    components: { HeaderNav }
}
</script>

<style lang="stylus">
@import '~@/style/palette'


#header
    background $header-background

    .container
        align-items center
        display flex
        justify-content flex-start
        padding 16px 0 32px 0
        position relative

    .header-text
        display inline-block
        font-size 32px
        margin 0 100px

    .cart-container
        align-items center
        display flex 
        position absolute
        top 0
        right 0

        .cart-text
            color $cart-header-text
            display inline-block
            font-weight 600
            margin 0 16px

        .cart-button
            align-items center
            background $cart-button-background
            display flex
            justify-content center
            height 120px
            width 120px

            .icon
                color $white
                font-size 64px

</style>
