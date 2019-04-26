<template lang="pug">
    
div#nav
    div( class='nav-container block' )
        router-link( class='link' to='/' )
            i( class='icon icon-home' )
            span Всё для дома

        router-link( class='link' to='/' )
            i( class='icon icon-lounge' )
            span Гостиная

        router-link( class='link' to='/' )
            i( class='icon icon-sofa' )
            span Мягкая мебель

        router-link( class='link' to='/' )
            i( class='icon icon-kitchen' )
            span Кухни

        router-link( class='link' to='/' )
            i( class='icon icon-bed' )
            span Спальни

        router-link( class='link' to='/' )
            i( class='icon icon-cactus' )
            span Детская мебель

        router-link( class='link' to='/' )
            i( class='icon icon-chair' )
            span Домашний офис

        router-link( class='link' to='/' )
            i( class='icon icon-shkafmal' )
            span Прихожие

        router-link( class='link' to='/' )
            i( class='icon icon-commode' )
            span Комоды

        router-link( class='link' to='/' )
            i( class='icon icon-tea-set' )
            span Товаря для дома
</template>

<style lang="stylus">
@import '~@/style/palette'

#nav
    background $nav-background

    .nav-container
        display flex
        justify-content space-between

    .link
        align-items center
        color $white
        cursor pointer
        display inline-flex
        font-size 18px
        padding 8px 0
        text-decoration none

    .icon
        display inline-block
        font-size 24px
        margin 0 8px
        position relative
        top 2px
</style>
