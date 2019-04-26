<template lang="pug">

div#app
    HeaderComponent
    router-view

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    components: { HeaderComponent }
}
</script>


<style lang="stylus">
// @import url('https://file.myfontastic.com/dsoWHUcfvPdv3huN6qucd7/icons.css')
@import '~@/style/styles.css'
@import '~@/style/base'
</style>
