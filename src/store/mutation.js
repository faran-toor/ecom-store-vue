export default {
    allProducts(state, payload) { 
        // console.log(payload)
        state.allProducts=payload
        // console.log(state.allProducts)
    },
    filterProducts(state, payload) { 
        // console.log(payload)
        state.filterProduct = payload
        // console.log(state.singlePro)
    },
    productDetail(state, payload) {
        state.detailProduct=[]
        state.detailProduct.push(payload)
        // console.log(state.detailProduct)
    },
    allCategories(state, payload) {
        state.allCategories=(payload)
        // console.log(state.detailProduct)
    },
    singleProducts(state, payload) {
        state.singleProduct={}
        state.singleProduct = (payload)
        // console.log(state.singleProduct)  
    },
    uploadUser(state, payload) {
        // state.singleProduct=[]
        state.user.push(payload)
        // console.log(state.user)  
    },
    authEmail(state, payload) { 
        if (payload) {
            state.email = true
        }
        else {
            state.email = false
        }
    }
}