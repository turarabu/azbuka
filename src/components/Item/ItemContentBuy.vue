<template lang="pug">

div( class='content buy' )
    div( class='section' )
        h3( class='title' ) Товар:
            span( class='line' )  Кровать с подъемным механизмом
            span( class='line' )  Машенька 140x200 см

    span( class='meta' ) Артикул: 1889067

    div( class='section' )
        h3( class='title' ) Цена / Цена со скидкой:

        span( class='old price' v-if='item.prices.old' ) {{ item.prices.old + item.prices.append }}
            span( class='new-price' ) {{ item.prices.current + item.prices.append }}
        span( class='price' v-else ) {{ item.prices.current + item.prices.append }}

    div( class='section' )
        h3( class='title' ) Остатки:

        div( class='left-progress' )

        div( class='left inline' )
            span( class='text' ) В наличии в магазинах

            div( class='total-container' )
                i( class='total-icon fas fa-map-marker-alt' )
                select( class='total-select select-icon' v-model='shop' )
                    option( value='0' ) ТЦ Октябрь
                    option( value='1' ) ТЦ Северная

        div( class='left inline' )
            span( class='text' ) Количество
            span( class='total-count' ) 3шт. 

    div( class='section' )
        h3( class='title' ) Укажите количество:

        div( class='count-container' )
            span( class='count-change' @click='count = Math.max(--count, 1)' )
            span( class='count' ) {{ count }}
            span( class='count-change add' @click='++count' )

    div( class='section' )
        h3( class='title' ) Выберите цвет:

        select( class='select select-icon' v-model='specs.color' )
            option( value='0' ) кофе с молоком
            option( value='1' ) морковка
            option( value='2' ) помидор

        button( class='button' @click='buy' )
            i( class='icon icon-cart' )
            span Купить

</template>

<script>
export default {
    props: [ 'item' ],
    methods: { buy },
    data: function () {
        return {
            shop: 0,
            count: 1,
            specs: {
                color: 0
            }
        };
    }
}

function buy () {
    // console.log(item)
    this.$store.commit('add-item', {
        id: this.item.id,
        shop: this.shop,
        count: this.count,
        specs: this.specs
    });
}
</script>


<style lang="stylus">
@import '~@/style/palette'

#item .content.buy
    .section
        margin 24px 0

    .meta 
        color $white-gray
        display block
        font-weight 600
        margin 8px 0

    .title
        font-size 18px
        font-weight 600
        text-transform uppercase

        .line
            display block

    .price
        border 1px solid $red
        border-radius 50px
        color $black
        display inline-block
        font-size 18px
        font-weight 600
        overflow hidden
        margin 8px 0
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

    .left-progress
        border 1px solid $red
        border-radius 5px
        margin 4px 0
        height 8px
        width 450px
        &:after
            border-radius 0 5px 5px 0
            display block
            content ''
            background $red
            height 100%
            width 35%

    .left
        display inline-block
        vertical-align top
        margin 8px 48px 0 0

        .text
            color $white-gray
            display block
            font-size 16px

        .total-container
            display block
            position relative

        .total-icon
            color $red
            font-size 14px
            position absolute
            top 8px
            left 0

        .total-select
            border none
            display block
            font-size 16px
            font-weight 600
            outline none
            padding 4px 8px 4px 16px

        .total-count
            font-size 16px
            font-weight 600

    .count-container
        align-items center
        display flex
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

    .select
        border 1px solid $black
        border-radius 50px
        display block
        font-size 16px
        font-weight 600
        margin 8px 0
        outline none
        padding 6px 12px
        position relative
        width 220px

    .select-icon
        background-color transparent
        background-image url('~@/assets/img/arrow-down.png')
        background-position calc(100% - 12px) center
        background-repeat no-repeat
        background-size 12px
        padding-right 32px !important
        -webkit-appearance none

    .button
        background $red
        border none
        border-radius 50px
        color $white
        cursor pointer
        font-size 18px
        margin 4px 0
        outline none
        padding 8px 48px 10px 48px
        position relative

        .icon
            display inline-block
            font-size 20px
            margin-right 8px
            position relative
            top 4px

</style>
