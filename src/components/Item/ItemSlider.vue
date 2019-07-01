<template lang="pug">

div( class='slider' )
    div( class='main' )
        span( class='slider-button left' @click='current = (current - 1 < 0) ? list.length - 1 : --current' )
            i( class='fas fa-angle-left' )
            //- i( class='icon icon-arrow-left' )

        div( class='main-image' )
            img(
                class='img'
                @click='$store.commit("slider", item.images)'
                :src='`http://95.167.9.22:81/images/${list[ current ]}.jpg`' )

        span( class='slider-button right' @click='current = (current + 1 < list.length) ? ++current : 0' )
            i( class='fas fa-angle-right' )
            //- i( class='icon icon-arrow-right' )


    div( class='list' )
        img( class='img' v-for='(img, index) in list'
            @click='current = index'
            :src='`http://95.167.9.22:81/images/${img}.jpg`' )

</template>


<script>
export default {
    props: [ 'item' ],
    data: function () {
        return {
            current: 0,
            list: this.item.images
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

        .main-image
            align-items center
            display flex
            justify-content center
            height 520px
            width 100%

        .img
            max-height 100%
            max-width calc(100% - 32px)

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
