<template lang="pug">

div#catalog( @click='small = !small' )
    div( class='block' )
        div( class='list' :class='{ small }' )
            ItemComponent( v-for='item in filtered' :item='item' :key='item.id' )
            
    CatalogFilter( @update='update' )
</template>

<script>
import { mapState } from 'vuex'

import ItemComponent from '@/components/ItemComponent.vue'
import CatalogFilter from '@/components/Catalog/CatalogFilter.vue'

export default {
    props: [ 'catalog' ],
    components: { ItemComponent, CatalogFilter },
    methods: { update },
    data: function () {
        return {
            small: false,
            items: this.$store.getters.catalog,
            filtered: this.$store.getters.catalog
        };
    }
}

function update () {
    var list = this.$store.state.filter;
    var self = this;
    var result = [];
    var comp;

    for (let key in list)
        if (list.hasOwnProperty(key)) {
            comp = list[key];

            self.items.forEach(function (item) {
                if (item.prices.current >= comp.min && item.prices.current <= comp.max)
                    result.push(item);
            });
        }

    return self.filtered = result;
}
</script>


<style lang="stylus">
@import '~@/style/palette'

#catalog
    display flex
    position relative
    min-height 720px

    .list
        $column = calc(25% - 20px)
        align-items center
        display grid
        grid-template-columns $column $column $column $column
        justify-content space-between
        margin 0 25px 0 15px
        // width 100%
</style>
