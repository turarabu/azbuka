<template lang="pug">
    div#full-slider( v-if='$store.state.slider !== false' @click='close' )
        div( class='container adaptive' )
            div( class='main-image' )
                img(
                    class='image'
                    :src='`http://95.167.9.22:81/images/${$store.state.slider[ current ]}.jpg`')

            div( class='list' )
                img(
                    v-for='(image, index) in $store.state.slider'
                    class='image'
                    @click='setImage(index)'
                    :src='`http://95.167.9.22:81/images/${image}.jpg`')
</template>

<script>
export default {
    methods: { close, setImage },
    updated: function () {
        // this.current = 0
    },
    data: function () {
        return {
            current: 0
        }
    }
}

function close (event) {
    if (event.target === this.$el || event.target.classList.contains('adaptive'))
        this.$store.commit("slider", false)
}

function setImage (index) {
    this.current = index
    this.$forceUpdate()
}
</script>


<style lang="stylus">
#full-slider
    align-items center
    display flex
    flex-direction column
    justify-content center
    background RGBA(0, 0, 0, .5)
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 20

    .container
        align-items center
        display flex
        flex-direction column
        justify-content center
        height calc(100% - 64px)

    .main-image
        width 100%
        max-height calc(100% - 116px)

        .image
            background #FFF
            display block
            box-shadow 0 0 15px RGBA(0, 0, 0, .5)
            padding 16px
            max-height 100%
            max-width 100%

    .list
        align-items center
        display flex
        justify-content center
        margin 32px 0

        .image
            background #FFF
            box-shadow 0 0 5px RGBA(0, 0, 0, .5)
            display inline-block
            margin 0 8px
            padding 4px
            height 96px
</style>

