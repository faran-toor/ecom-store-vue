import { createStore } from "vuex"
import mutations from './mutation.js'
import getters from './getters.js'
import actions from './action.js'

const store = createStore({
    state: {
        allProducts: [],
        detailProduct: [],
        allCategories: [],
        singleProduct: {},
        user: [],
        email: true,
        filterProduct:[],
    },
    actions,
    getters,
    mutations,
})

export default store