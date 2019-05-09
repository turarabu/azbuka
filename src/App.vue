<template lang="pug">

div#app
    HeaderComponent
    div#view
        router-view

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    components: { HeaderComponent }
}
</script>


<style lang="stylus">
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css')
// @import url('https://file.myfontastic.com/dsoWHUcfvPdv3huN6qucd7/icons.css')
@import '~@/style/styles.css'
@import '~@/style/base'

#app, & *
    user-select none

#view
    overflow hidden
    padding-top 60px
    position relative
    z-index 2
</style>
