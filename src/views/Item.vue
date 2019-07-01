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
    data: getData
}

function getData () {
    var ajax = new XMLHttpRequest()

    ajax.open('GET', `http://95.167.9.22:8081/item/list?id=${this.id}`, false)
    ajax.send(null)

    return ajax.status == 200
        ? { item: JSON.parse( ajax.response ).data[0] }
        : { item : {}}
}
</script>

<style lang="stylus">

#item
    align-items flex-start
    display flex
    justify-content space-between
    padding 64px 0
</style>
