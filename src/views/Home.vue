<template lang="pug">

div#home
    img( class='banner block' src='~@/assets/img/banner.jpg' )

    div( class='first block' )
        h3( class='title' ) Скидки февраля

        div( class='grid' )
            ItemComponent( v-for='item in discounts' :item='item' :key='item.id' )

</template>

<script>
import ItemComponent from '@/components/ItemComponent.vue'

export default {
    components: { ItemComponent },
    data: function () {
        console.log(this.$store.getters.discounts)
        return {
            discounts: this.$store.getters.discounts
        };
    }

}
</script>


<style lang="stylus">


#home
    margin 32px auto

    .banner
        display block

    .first
        margin 32px auto

    .grid
        display grid
        grid-template-columns 280px 280px 280px 280px 280px 280px
        justify-content space-between
        width 100%
</style>
