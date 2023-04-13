<template>
  <div class="details-container" @click="closeDetail">
    <div class="card-detail" v-for="product in detailProduct" :key="product.id">
      <div class="close-icon" @click="$emit('close-detail')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
          />
        </svg>
      </div>
      <div class="image">
        <img :src="product.thumbnail" alt="" />
        <base-button @click="addCart"></base-button>
      </div>
      <div class="content">
        <h3 class="title">
          {{ product.title }}
        </h3>
        <span class="price"> $ {{ product.price }} </span>
        <p class="description">
          {{ product.description }}
        </p>
        <!-- <add-cart></add-cart> -->
      </div>
    </div>
  </div>
</template>

<script>
import AddCart from '../icons/AddCart.vue'
export default {
  components: {
    AddCart
  },
  props: ['id'],
  async mounted() {
    await this.$store.dispatch('productDetail', this.id)
    // console.log(this.$store.getters.getProductDetail)
  },
  computed: {
    detailProduct() {
      return this.$store.getters.getProductDetail
    }
  },
  methods: {
    closeDetail(e) {
      const detail = e.target.classList.contains('details-container')
      if (detail) {
        this.$emit('close-detail')
      }
    },
    addCart() {
      this.$router.push({ path: `/cart/${this.id}` })
    }
  }
}
</script>

<style scoped>
.details-container {
  width: 100%;
  height: 800px;
  position: absolute;
  top: 0;
  background: #0000009c;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  z-index: 3;
}
.card-detail {
  width: 47%;
  height: max-content;
  top: 30px;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
  background: #fff;
  border-radius: 10px;
  z-index: 2;
}
.content {
  padding: 10px;
  background: #fff;
  border-radius: 10px;
}
h3.title {
  font-size: 22px;
  font-weight: 700;
}
.close-icon {
  width: 37px;
  position: absolute;
  right: -55px;
  top: -14px;
  cursor: pointer;
}
.close-icon svg path {
  fill: #fff;
}
.close-icon:hover svg path {
  fill: #ffffff87;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
}
span.price {
  color: red;
}
p.description {
  font-size: 16px;
}
.image {
  position: relative;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
</style>
