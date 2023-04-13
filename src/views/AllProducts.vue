<template>
  <div class="wraper">
    <transition name="title" appear>
      <h1>All Products</h1>
    </transition>
  </div>
  <div class="product-items">
    <transition-group name="prducts" appear>
      <div class="product-card" v-for="product in allProduct" :key="product.id">
        <ProductsList @show-detail="showDetailProduct" :product="product" />
      </div>
    </transition-group>
    <base-spinner v-if="allProduct.length === 0"></base-spinner>
  </div>
  <product-detail v-if="detail" :id="id" @close-detail="closeDetailProduct"></product-detail>
</template>

<script>
import ProductsList from '../components/page/ProductsList.vue'
import ProductDetail from '../components/page/ProductDetail.vue'
import BaseSpinner from '../components/UI/BaseSpinner.vue'
import FilterProducts from '../components/UI/FilterProducts.vue'
export default {
  components: { ProductsList, ProductDetail, BaseSpinner, FilterProducts },
  data() {
    return {
      detail: false,
      id: null,
      allProducts: []
    }
  },
  created() {
    this.$store.dispatch('getAllProducts')
  },
  // watch: {
  //   $route() {
  //     console.log('route')
  //     if (this.$route.path === '/') {
  //       this.closeDetailProduct()
  //     }
  //   }
  // },
  computed: {
    allProduct() {
      this.allProducts = this.$store.getters.getAllProduct
      // console.log(this.allProducts)
      return this.allProducts
    }
  },
  mounted() {
    window.scrollTo({
      top: 0
    })
  },
  methods: {
    showDetailProduct(id) {
      // console.log(id)
      this.id = id
      this.detail = true
      document.querySelector('.app').classList.add('fixed-app')
    },
    closeDetailProduct() {
      // console.log('outer')
      document.querySelector('.app').classList.remove('fixed-app')
      this.detail = false
    }
  }
}
</script>
<style scoped>
.wraper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wraper h1 {
  font-size: 38px;
  margin: 1rem;
  color: #666464;
}
.product-items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  /* gap: 20px; */
}
.product-card {
  padding: 20px 10px 5px 10px;
  width: 304px;
  height: 350px;
}
.title-enter-from {
  opacity: 0;
  transform: scaleY(-30px);
}
.title-enter-to {
  opacity: 1;
  transform: scaleY(0px);
}
.title-enter-active {
  transition: all 0.3s ease;
}
.prducts-enter-from {
  opacity: 0;
  transform: scaleY(+50px);
}
.prducts-enter-to {
  opacity: 1;
  transform: scaleY(0px);
}
.prducts-enter-active {
  transition: all 1s ease;
}
</style>
