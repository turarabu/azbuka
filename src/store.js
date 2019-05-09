import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    getters: { catalog, discounts },
    mutations: {
        reset,
        'catalog-filter': catalogFilter
    },

    state: {
        filter: filter(),
        cart: cart()
    }
});

function reset(state, the) {
    state[the] = the === 'cart' ? [] : {};
}

function catalogFilter (state, set) {
    return state.filter[set.key] = set.value;
}

function filter () {
    return {};
}

function cart () {
    return [];
}

function catalog () {
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