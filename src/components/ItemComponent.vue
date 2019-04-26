<template lang="pug">

router-link( class='item' :to='`/item/${ item.id }`' tag='div' )
    img( class='poster' src='~@/assets/img/item-101.jpg' )
    p( class='name' ) {{ item.name }}
    p( class='price-text' ) {{ item.prices.old ? 'Старая цена / Цена' : 'Цена' }}

    div( class='controls' )
        span( class='old price' v-if='item.prices.old' ) {{ item.prices.old }}
            span( class='new-price' ) {{ item.prices.current }}
        span( class='price' v-else ) {{ item.prices.current }}

        button( class='add' )
            i( class='icon icon-cart' )

</template>


<script>
export default {
    props: [ 'item' ]
}
</script>


<style lang="stylus">
@import '~@/style/palette'

.item
    border 1px solid #EEE
    border-radius 3px
    display block
    margin 16px 0
    padding 8px 8px 12px 8px
    position relative

    .poster
        width 100%

    .name
        font-weight 600
        margin-top 20px

    .price-text
        color #777
        font-size 14px
        font-weight 600

    .controls
        align-items center
        display flex
        justify-content space-between
        margin-top 16px

    .price
        border 1px solid $red
        border-radius 50px
        color $black
        display inline-block
        font-size 18px
        font-weight 600
        overflow hidden
        padding 6px 16px
        &.old
            border-right none
            color #999
            padding-right 0

        .new-price
            background $red
            border-radius inherit
            color $white
            margin-left 12px
            padding 6px 16px

    .add
        background none
        border none
        cursor pointer
        font-size 36px
        outline none
        padding 4px 12px
        position relative
        &:after
            align-items center
            background $red
            border-radius 50%
            color $white
            content '+'
            display inline-block
            font-size 14px
            justify-content center
            position absolute
            top 2px
            right 2px
            height 20px
            width 20px

</style>
