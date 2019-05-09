<template lang="pug">

div( class='slider' )
    div( class='main' )
        span( class='slider-button left' @click='current = (current - 1 < 0) ? list.length - 1 : --current' )
            i( class='fas fa-angle-left' )
            //- i( class='icon icon-arrow-left' )

        img( class='img' :src=' list[ current ] ' )

        span( class='slider-button right' @click='current = (current + 1 < list.length) ? ++current : 0' )
            i( class='fas fa-angle-right' )
            //- i( class='icon icon-arrow-right' )


    div( class='list' )
        img( class='img' src='~@/assets/img/item-101.jpg' )
        img( class='img' src='~@/assets/img/item-102.jpg' )

</template>


<script>
export default {
    props: [ 'item' ],
    data: function () {
        return {
            current: 0,
            list: [
                '/img/item-101.jpg',
                '/img/item-102.jpg'
            ]
        };
    }
}
</script>


<style lang="stylus">
@import '~@/style/palette'

#item .slider
    overflow hidden
    width 900px

    .main
        align-items center
        display flex
        justify-content space-between
        position relative

        .img
            max-width calc(100% - 120px)

        .slider-button
            align-items center
            background $red
            border-radius 50%
            color $white
            cursor pointer
            display flex
            font-size 18px
            justify-content center
            height 30px
            width 30px

    .list
        align-items center
        display flex
        margin 32px 0
        overflow auto
        position relative
        width 100%

        .img
            display inline-block
            margin 0 16px
            width 180px
</style>
