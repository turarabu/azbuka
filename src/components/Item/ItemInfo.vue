<template lang="pug">

div( class='info' )
    div( class='tabs-container' )
        span( class='tab' :class='{active: active === 0}' @click='active = 0')
            span( class='text' ) Купить товар
        span( class='tab' :class='{active: active === 1}' @click='active = 1')
            span( class='text' ) Характеристики

    ItemContentBuy( v-if='active === 0' :item='item' )
    ItemContentSpecs( v-else :item='item' )
</template>


<script>
import ItemContentBuy from '@/components/Item/ItemContentBuy.vue'
import ItemContentSpecs from '@/components/Item/ItemContentSpecs.vue'

export default {
    props: [ 'item' ],
    components: { ItemContentBuy, ItemContentSpecs },
    data: function () {
        return {
            active: 0
        }
    }
}
</script>


<style lang="stylus">
@import '~@/style/palette'


#item .info
    background $header-background
    overflow hidden
    width 800px

    .tabs-container
        display block
        width 110%

    .tab
        background $dark-gray
        color $white
        cursor pointer
        display inline-block
        font-size 18px
        padding 12px 0
        position relative
        left -5%
        text-align center
        text-transform uppercase
        transform skewX(-25deg)
        width 50%
        &.active
            background $red

        .text
            display block
            transform skewX(25deg)

    .content
        padding 24px 100px        
</style>
