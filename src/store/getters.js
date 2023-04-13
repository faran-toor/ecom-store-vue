export default {
    getAllProduct(state) {
        // console.log(state.allProduct)
        return state.allProducts
    },
    getSingleProduct(state) {
        // console.log(state.allProduct)
        return state.singleProduct
    },
    getProductDetail(state) {
        // console.log(state.detailProduct)
        return state.detailProduct
    },
    getAllCategories(state) {
        // console.log(state.detailProduct)
        return state.allCategories
    },
    getFilterProducts(state) {
        // console.log(state.detailProduct)
        return state.filterProduct
    },
    getUserData(state) {
        // console.log(state.user)
        return state.user
    }
    ,getEmailVerify(state) {
        // console.log(state.user)
        return state.email    }
}