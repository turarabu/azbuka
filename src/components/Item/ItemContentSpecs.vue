<template lang="pug">

div( class='content specs' )
    div( class='section' )
        h3( class='title' ) Характеристики:
        p( class='text' ) Производство: г.Калининград
        p( class='text' ) Унифарм Медия

    div( class='section' )
        p( class='dotlet' )
            span( class='key' ) Длина
            span( class='value' ) 150

        p( class='dotlet' )
            span( class='key' ) Ширина
            span( class='value' ) 100

        p( class='dotlet' )
            span( class='key' ) Высота
            span( class='value' ) 300

        p( class='dotlet' )
            span( class='key' ) Глубина
            span( class='value' ) 800

    div( class='section' )
        h3( class='title' ) Лестница:

        p( class='dotlet' )
            span( class='key' ) Наличие лестницы
            span( class='value' ) Нет

    div( class='section' )
        h3( class='title' ) Материал:

        p( class='dotlet' )
            span( class='key' ) Материал каркаса
            span( class='value' ) Кофе с молоком

        p( class='dotlet' )
            span( class='key' ) Материал матраса
            span( class='value' ) Кофе с молоком

</template>

<script>
export default {
    
}
</script>

<style lang="stylus">
@import '~@/style/palette'

#item .content.specs

    .section
        margin 24px 0

        .title
            font-size 18px
            font-weight 600
            text-transform uppercase

        .text
            color $white-gray
            font-size 14px
            font-weight 600

        .dotlet
            display flex
            justify-content space-between
            position relative
            &:before
                border-top 1px dotted
                content ''
                display block
                position absolute
                top 12px
                left 0
                width 100%
                z-index 1

            .key, .value
                background $header-background
                color #555
                display inline-block
                font-size 16px
                font-weight 600
                padding 0 4px
                position relative
                z-index 2
                
            

</style>
