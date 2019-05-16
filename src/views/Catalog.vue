<template lang="pug">

div#catalog( :class='{ small }' @filter='small = !small' )
    div( class='block' :style='{minHeight: minHeight + "px"}' )
        div( class='list' )
            ItemComponent( v-for='item in filtered' :item='item' :key='item.id' )
            
    CatalogFilter( @update='update' @height='height' )
</template>

<script>
import { mapState } from 'vuex'

import ItemComponent from '@/components/ItemComponent.vue'
import CatalogFilter from '@/components/Catalog/CatalogFilter.vue'

const filters = { range, search }

export default {
    props: [ 'catalog' ],
    mounted: init,
    components: { ItemComponent, CatalogFilter },
    computed: { small },
    methods: { update, height },
    data: function () {
        return {
            minHeight: 0,
            items: this.$store.getters.catalog,
            filtered: this.$store.getters.catalog
        };
    }
}

function init () {
    this.height();
    document.addEventListener('search-update', this.update);
}

function small () {
    return this.$store.state.small
}

function update () {
    var result = this.items;
    var filter = Object.values(this.$store.state.filter);

    filter.forEach(function (rule) {
        result = filters[ rule.type ](rule, result);
    });

    return this.filtered = result;
}

function height () {
    this.minHeight = this.$el.querySelector('.filter').offsetHeight;
}

function getProp (name, item) {
    var chain = name.split('.');
    var result = item;

    chain.forEach(function (prop) {
        result = result[prop];
    });

    return result;
}

function range (rule, items) {
    var result = [];

    items.forEach(function (item) {
        var prop = getProp(rule.key, item);
        
        if (prop >= rule.value.min && prop <= rule.value.max)
            result.push(item);
    });

    return result;
}

function search (rule, items) {
    var result = [];

    items.forEach(function (item) {
        var prop = getProp(rule.key, item);
        
        if ( prop.toLowerCase().includes( rule.value.toLowerCase() ) )
            result.push(item);
    });

    return result;
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
        width 100%

#catalog.small

    .list
        width calc(100% - (25% + 20px))
</style>
