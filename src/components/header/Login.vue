<template>
  <div class="left">
    <router-link :to="{ name: 'login' }">Login</router-link>
    <icon-cart-vue @add-cart="$emit('add-cart')"></icon-cart-vue>
  </div>
</template>

<script>
import IconCartVue from '../icons/IconCart.vue'

export default {
  // data() {
  //   return {
  //     token: ''
  //   }
  // },
  // created() {
  //   this.token = localStorage.getItem('token')
  // },
  components: {
    IconCartVue
  }
}
</script>

<style scoped>
.left {
  display: flex;
}

.left a {
  color: #dddada;

  margin-right: 17px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
}
a:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
