<template>
  <div class="product">
    <div class="image-section">
      <img :src="product.thumbnail" alt="" />
    </div>
    <div class="icons-fav">
      <ArrowDownVue :id="product.id" @show-detail="showDetailProduct" />
    </div>
    <div class="product-caption">
      <div class="title">
        <span class="product-title">{{ product.title }}</span>
      </div>
      <div class="price-tag">
        <span class="ragular-price">${{ product.price }}</span>
      </div>
      <div class="add-cart">
        <add-cart :id="product.id"></add-cart>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowDownVue from '../icons/ArrowDown.vue'
import AddCart from '../icons/AddCart.vue'
export default {
  props: ['product'],
  components: {
    ArrowDownVue,
    AddCart
  },
  data() {
    return {
      name: 'AddCart'
    }
  },
  methods: {
    showDetailProduct(id) {
      this.$emit('show-detail', id)
    }
  }
}
</script>

<style scoped>
.product {
  width: 100%;
  display: inline-block;
  height: 335px;
  position: relative;
}
.product:hover {
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
}

.product:hover .icons {
  opacity: 1;
}
.icons {
  opacity: 0;
}
.icons-fav {
  width: 40px;
  /* height: 100px; */
  position: absolute;
  /* left: 22px; */
  right: 1px;
  top: 3px;
}
.image-section {
  padding-bottom: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  position: relative;
}
.image-section img {
  display: block;
  max-width: 90%;
  height: 230px;
}
.product-caption {
  padding: 6px 14px 20px 14px;
  background: #ffffff;
  position: relative;
}
.product-title {
  line-height: 22px;
  display: block;
  overflow: hidden;
  color: #3c74b9;
  font-size: 14px;
  margin-bottom: 5px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-weight: 700;
}
.product-title a {
  text-decoration: none;
}
.ragular-price {
  font-size: 14px;
  font-weight: 900;
  color: #e12e2e;
  margin-right: 5px;
}
</style>
