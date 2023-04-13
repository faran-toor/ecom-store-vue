<template>
  <div class="mobile-bar">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'allProducts' }">Shop All</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="mobileBar" to="/shipping-returns">Shipping Return's</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileBar: true
    }
  },
  components: {},
  mounted() {
    if (window.innerWidth < 450) {
      this.mobileBar = true
    }
  }
}
</script>

<style scoped>
.tags a {
  color: #dddada;

  margin-left: 17px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
}
.tags a:hover {
  color: #fff;
  text-decoration: underline;
}
/* a::after {
  animation: slide-in 0.5s ease-in-out;
  content: '';
  display: inline-block;
  transition: all 0.5s ease-in-out;
  color: black;
  width: 15px;
}

a:hover::after {
  width: 15px;
} */
.mobile-bar {
  position: absolute;
  top: 93px;
  left: 26px;
  display: flex;
  flex-direction: column;
}
.mobile-bar a {
  color: #fff;
  margin-left: 17px;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  margin-top: 22px;
}
</style>
