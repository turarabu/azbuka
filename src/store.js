import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    getters: { catalog, discounts },
    mutations: {
        reset,
        'toggle-filter': toggleFilter,
        'catalog-filter': catalogFilter,
        'add-item': addItem,
        'remove-item': removeItem,
        'add-count': addCount,
        'set-build': setBuild
    },

    state: {
        small: false,
        filter: {},
        cart: []
    }
});

function reset(state, the) {
    state[the] =  the === 'cart' ? [] : {};
}

function toggleFilter (state) {
    state.small = !state.small;
}

function catalogFilter (state, set) {
    state.filter[ set.key ] = set;
}

function addItem (state, item) {
    state.cart.push(item);
}

function removeItem (state, index) {
    state.cart.splice(index, 1);
}

function addCount (state, set) {
    state.cart[ set.index ].count = Math.max(1, state.cart[ set.index ].count + set.count);
}

function setBuild (state, set) {
    state.cart[ set.index ].build = set.build;
}

function catalog () {
    var result = [];
    var item = {
        name: 'Мария; 1600x2000 мм',
        discount: 20,
        poster: 'link/to/poster.jpg',
        images: ['img/item-101.jpg', 'img/item-102.jpg'],
        specsKeys: [['color', 'Цвет']],
        specsVals: [['кофе с молоком', 'морковка', 'помидорка']],
        prices: {
            current: 4000,
            old: 4800,
            append: '.-'
        }
    };

    for(let i = 0; i != 32; ++i)
        result.push(Object.assign({id: i}, item));

    return result;
}

function discounts () {
    var result = [];
    var item = {
        name: 'Мария; 1600x2000 мм',
        discount: 20,
        poster: 'link/to/poster.jpg',
        images: ['assets/img/item-101.jpg', 'assets/img/item-102.jpg'],
        prices: {
            current: 4000,
            old: 4800,
            append: '.-'
        }
    };

    for(let i = 0; i != 12; ++i)
        result.push(Object.assign({id: i}, item));

    return result;
}