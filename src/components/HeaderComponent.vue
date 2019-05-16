<template lang="pug">

header#header
    div( class='container block' )
        router-link( class='logo' to='/' tag='div' )
            img( class='logo' src='~@/assets/img/logo.png' )
            
        span( class='header-text' ) Больше выбора | 
            span( class='bold' ) Только выгода

        router-link( class='cart-container' to='/cart/items' tag='div' )
            span( class='cart-text' ) Корзина
            span( class='cart-button' )
                span( class='items-count' ) {{ cart.length }}
                i( class='icon icon-cart' )

    HeaderNav
    SiteNav
</template>

<script>
import HeaderNav from '@/components/Header/HeaderNav.vue'
import SiteNav from '@/components/Header/SiteNav.vue'

export default {
    components: { HeaderNav, SiteNav },
    computed: { cart }
}

function cart () {
    return this.$store.state.cart
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
            position relative
            height 120px
            width 120px

            .items-count
                align-items center
                background $red
                border-radius 50%
                color $white
                display flex
                font-size 18px
                justify-content center
                position absolute
                top 16px
                right 16px
                height 38px
                width 38px

            .icon
                color $white
                font-size 64px

</style>
