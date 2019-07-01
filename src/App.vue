<template lang="pug">

div#app
    HeaderComponent
    FullSlider
    div#view
        router-view

    div#confirm( :class='{active: currentConfirm}' )
        div( class='confirm-container' )
            p( class='question' ) {{ question }}

            div( class='actions' )
                button( class='button' @click='confirm(true)' ) Да
                button( class='button red' @click='confirm(false)' ) Нет
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FullSlider from '@/components/FullSlider.vue'

export default {
    mounted: init,
    components: { HeaderComponent, FullSlider },
    methods: { confirm },
    data: function () {
        return {
            question: '',
            currentConfirm: false
        }
    }
}


function init () {
    var self = this;

    document.confirm = function (question) {
        self.question = question;

        return new Promise(function (resolve) {
            self.currentConfirm = function (answer) {
                resolve(answer);
                self.currentConfirm = false;
            }
        });
    }
}

function confirm (answer) {
    if ( this.currentConfirm === false )
        return;

    return this.currentConfirm(answer);
}
</script>


<style lang="stylus">
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css')
// @import url('https://file.myfontastic.com/dsoWHUcfvPdv3huN6qucd7/icons.css')
@import '~@/style/styles.css'
@import '~@/style/base'

@import '~@/style/palette'

#app, & *
    user-select none

#view
    overflow hidden
    padding-top 60px
    position relative
    z-index 2

#confirm
    align-items center
    background RGBA(25, 25, 25, .25)
    display none
    justify-content center
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 1000
    &.active
        display flex

    .confirm-container
        background $white
        box-shadow 0 0 64px RGBA(0, 0, 0, .5)
        padding 16px 32px

    .question
        font-size 24px
        margin 12px 16px

    .actions
        align-items center
        display flex
        justify-content space-around

    .button
        background $white
        border 2px solid $red
        color black
        cursor pointer
        font-size 20px
        margin 12px 0
        padding 8px 32px
        &.red
            background $red
            color $white
</style>
