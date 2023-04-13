export default {
    async getAllProducts(context) {
        const response = await fetch('https://dummyjson.com/products/?limit=100')
        const res = await response.json()
        // console.log(res.products)
        
        context.commit('allProducts' , res.products)
    },
    async getCategories(context) {
        const response = await fetch('https://dummyjson.com/products/categories')
        const res = await response.json()
        // console.log(res)
        context.commit('allCategories' , res)
    },
    async filterProducts(context) {
        const response = await fetch('https://dummyjson.com/products?limit=12&skip=10')
        const res = await response.json()
        // console.log(res)
        
        context.commit('filterProducts' , res.products)
    },
    // async filterProducts(context) {
    //     const response = await fetch('https://example.com/wp-json/wc/v3/products')
    //     const res = await response.json()
    //     console.log(res)
        
    //     // context.commit('filterProducts' , res)
    // },
    async getCategoryProduct(context, category) {
        // console.log(id)
        const response = await fetch(`https://dummyjson.com/products/category/${category}/?limit=0`)
        const res = await response.json()
        console.log(res)
        context.commit('allProducts' , res.products)
    },
    async productDetail(context, id) {
        // console.log(id)
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const res = await response.json()
        // console.log(res)
        context.commit('productDetail' , res)
    },
    async getSignleProduct(context, id) {
        console.log(id)
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const res = await response.json()
        console.log(res)
        context.commit('singleProducts' , res)
    },
     async uploadData(context, data) {
        // console.log(data,"inin")
         const response = await fetch('https://api.escuelajs.co/api/v1/users/',
             {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json'
                 },
                 body: JSON.stringify(data)
             }
         )
        // console.log(response)
    },
     async authenticateUser(context, data) {
        // console.log(data)
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
         const res = await response.json()
        //  console.log(res)
        
         if (response.ok) {
         localStorage.setItem('token', res.access_token)
         }
    }, 
    async getUserDetail(context) {
        const token = localStorage.getItem('token')
        if (token) {
            const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
            method:'GET',
            headers: { "Authorization": `Bearer ${token}` },
        })
        }
        const res = await response.json()
        context.commit('uploadUser' , res)
    },
    async checekEmail(context , email) {
        const emailCheck = {
                email : email
            }
            const response = await fetch('https://api.escuelajs.co/api/v1/users/is-available', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailCheck)
        })
        
        // console.log(response.json())
        const res = await response.json()
        // console.log(res.isAvailable)
        context.commit('emailCheck' , res.isAvailable)
    },
}