<template>
  <div class="left-icon" @click="moveContainerLeft">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
      />
    </svg>
  </div>
  <div class="categories-container">
    <div class="header">
      <h1>Product Categories</h1>
    </div>

    <div class="outer">
      <div class="card-categories" v-for="(product, index) in productList" :key="product.id">
        <div class="image" @click="showProducts(product)">
          <img :src="images[index]" alt="" />
          <!-- <button class="viewProduct" >Quick View</button> -->
        </div>
        <div class="title">
          <h1>{{ product }}</h1>
        </div>
      </div>
    </div>
  </div>
  <div class="right-icon" @click="moveContainerRight">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path
        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/category/smartphonecategory.jpg',
        '/category/laptop.jpg',
        '/category/fragrances.webp',
        '/category/skincare.jpg',
        '/category/groceries.jpg',
        '/category/home-decoration.jpg',
        '/category/furniture.webp',
        '/category/tops.jpg',
        '/category/womens-dresses.webp',
        '/category/womens-shoes.jpg',
        '/category/mens-shirts.webp',
        '/category/mens-shoes.jpg',
        '/category/mens-watches.jpg',
        '/category/womens-watches.jpg',
        '/category/womens-bags.jpg',
        '/category/womens-jewellery.jpg',
        '/category/sunglasses.webp',
        '/category/automotive.jpg',
        '/category/motorcycle.jpg',
        '/category/lighting.jpg'
      ],
      productLists: []
    }
  },
  computed: {
    productList() {
      return this.$store.getters.getAllCategories
    }
  },
  methods: {
    moveContainerLeft() {
      document.querySelector('.outer').scrollLeft -= 333
    },
    moveContainerRight() {
      document.querySelector('.outer').scrollLeft += 333
    },
    async showProducts(title) {
      //   console.log(id)
      this.$router.push({ path: '/all-products', query: { category: title } })
      await this.$store.dispatch('getCategoryProduct', title)
    }
  }
}
</script>

<style scoped>
.categories-container {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
}
.categories-container h1 {
  text-align: center;
  color: rgb(16 16 16);
  font-size: 29px;
  text-transform: uppercase;
}
.outer {
  display: flex;
  padding: 15px;
  /* overflow-x: scroll; */
  width: 97%;
  height: 318px;
  margin: auto;
  scroll-behavior: smooth;
  transition: all 0.3s;
  overflow: hidden;
}
.image {
  width: 285px;
  cursor: pointer;
  height: 80%;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-categories {
  margin-left: 25px;
  padding: 5px;
  background: #fff;
  height: 100%;
}
.title {
  background: #fff;
  height: 20%;
}
.card-categories:hover {
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
  border-radius: 10px;
}

.left-icon {
  position: absolute;
  top: 1180px;
  left: 5px;
  width: 45px;
  height: 45px;
  background: rgb(223 206 206 / 76%);
  z-index: 1;
  border-radius: 25px;
  cursor: pointer;
}
.right-icon {
  position: absolute;
  top: 1180px;
  right: 5px;
  width: 45px;
  z-index: 1;
  height: 45px;
  background: rgb(223 206 206 / 76%);
  border-radius: 25px;
  cursor: pointer;
}
svg {
  width: 20px;
  top: 5px;
  left: 13px;
}
</style>
