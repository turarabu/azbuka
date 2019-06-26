<template lang="pug">

router-link( class='item' :to='`/item/${ item.id }`' tag='div' )
    img( class='poster' :src='`/images/${item.headImage}.jpg`' )
    p( class='name' ) {{ item.name }}
    p( class='price-text' ) {{ price.old > 0 ? 'Старая цена / Цена' : 'Цена' }}

    div( class='controls' )
        span( class='old price' v-if='price.old > 0' ) {{ price.current }}
            span( class='new-price' ) {{ parseInt(price.current / 100 * (100 - price.old)) }}
        span( class='price' v-else ) {{ price.current }}

        button( class='add' )
            i( class='icon icon-cart' )

</template>

<script>
export default {
    props: [ 'item' ],
    methods: { getPrice },
    data: function () {
        console.log(this.getPrice(this.item))
        return {
            price: this.getPrice(this.item)
        }
    }
}

function getPrice (item) {
    var prices = {
        old: 0,
        current: 0
    }

    item.specs.forEach(spec => {
        spec.options.forEach(option => {
            if ( prices.current === 0 )
                prices = setPrices(option.prices)

            else if (prices.current > option.prices.current)
                prices = setPrices(option.prices)

        })
    })

    return prices
}

function setPrices (prices) {
    var discs = prices.discounts
    var current = prices.current
    var old = prices.discounts.length > 0
        ? Math.max(...getDiscs(prices.discounts)) : 0

    return {old, current, discs}
}

function getDiscs (discs) {
    var result = []

    discs.forEach(disc => result.push( disc.discount ))
    return result
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
