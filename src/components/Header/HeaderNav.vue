<template lang="pug">
    
div#nav
    div( class='nav-container block' )
        router-link( v-for='nav in catalogs' key='id' class='link' :to='`/catalog/${ nav.id }`' )
            i( class='icon icon-home' )
            span {{ nav.name }}
</template>

<script>
export default {
    data: function () {
        var ajax = new XMLHttpRequest()

        ajax.open('GET', 'http://95.167.9.22:8081/catalog/list?parentId=00000000001', false)
        ajax.send(null)

        console.log( JSON.parse( ajax.responseText ) )

        return {
            catalogs: JSON.parse( ajax.responseText ).data
        }
    }
}
</script>


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
