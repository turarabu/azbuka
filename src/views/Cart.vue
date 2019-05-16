<template lang="pug">

div#cart
    CartHeader
    CartList

</template>


<script>
import CartHeader from '@/components/Cart/CartHeader.vue'
import CartList from '@/components/Cart/CartList.vue'

export default {
    components: { CartHeader, CartList }
}
</script>


<style lang="stylus">
@import '~@/style/palette'
</style>
