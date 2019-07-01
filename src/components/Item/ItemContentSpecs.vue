<template lang="pug">

div( class='content specs' )
    div( class='section' )
        h3( class='title' ) Характеристики:
        p( class='text' ) Производство: {{ item.manufacturer }}

    div( class='section' v-for='prop in item.properties' )
        h3( class='title' ) {{ prop.name ? `${prop.name}:` : '' }}
        div( v-if='prop.childs.length > 0' )
            p( class='dotlet' v-for='child in prop.childs' )
                span( class='key' ) {{ child.name }}
                span( class='value' ) {{ child.value }}

</template>

<script>
export default {
    props: ['item']
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
