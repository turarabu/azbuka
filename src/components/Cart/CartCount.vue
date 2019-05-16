<template lang="pug">

div( class='cart-count' )
    div( class='total' )
        p( class='line' )
            span( class='key' ) Стоимость товаров
            span( class='value' ) {{ count() }} .-

        p( class='line' )
            span( class='key' ) Стоимость сборки
            span( class='value' ) 0

        p( class='line' )
            span( class='key' ) Ваша скидка
            span( class='value' ) 0

        p( class='line' )
            span( class='key' ) Итого к оплате
            span( class='value' ) {{ count() }} .-

        router-link( class='next' tag='button' to='/cart/assembly' ) Далее    
</template>

<script>
export default {
    props: [ 'cart' ],
    methods: { count }
}

function count () {
    var count = 0;

    this.cart.forEach(function (item) {
        count += item.prices.current * item.count;
    });

    return count;
}
</script>

<style lang="stylus">
@import '~@/style/palette'

.cart-count
    display flex
    justify-content flex-end
    margin 32px 0

    .total
        width 400px

    .line
        align-items center
        display flex
        font-weight 600
        font-size 18px
        margin 8px 0

        .key
            color $white-gray
            display inline-block
            margin-right 10px
            &:after
                display inline
                content ':'


    .next
        background $red
        border none
        border-radius 25px
        font-size 18px
        color $white
        cursor pointer
        margin 16px 0
        outline none
        padding 8px 32px
</style>
