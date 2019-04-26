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
        return {
            discounts: items(12)
        };
    }

}

function items (count) {
    var id = 101;
    var result = [];
    var item = {
        name: 'Мария; 1600x2000 мм',
        discount: 20,
        poster: 'link/to/poster.jpg',
        prices: {
            current: '4000.-',
            old: '4800.-'
        }
    };

    for(let i = 0; i != count; ++i)
        result.push(Object.assign(
            JSON.parse( JSON.stringify(item) ),
            { id: parseInt(++id) }
        ));

    return result;
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
