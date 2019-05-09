<template lang="pug">

div#item( class='block' )
    ItemSlider( :item='item' )
    ItemInfo( :item='item' )

</template>

<script>
import ItemSlider from '@/components/Item/ItemSlider.vue'
import ItemInfo from '@/components/Item/ItemInfo.vue'

export default {
    components: { ItemSlider, ItemInfo },
    props: [ 'id' ],
    data: function () {
        return {
            item: this.$store.getters.catalog[ this.id ]
        };
    }
}
</script>

<style lang="stylus">

#item
    align-items flex-start
    display flex
    justify-content space-between
    padding 64px 0
</style>
