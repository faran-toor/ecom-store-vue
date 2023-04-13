<template>
  <div class="app">
    <the-header @add-cart="addCartShow"></the-header>
    <router-view v-slot="{ Component }">
      <transition name="route" made="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <add-cart-page @close-cart="closeCart" v-if="showAddCartPage"></add-cart-page>
    <scroll-up></scroll-up>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeader from './components/header/TheHeader.vue'
import AddCartPage from './components/page/AddCartSideBar.vue'
import ScrollUp from './components/icons/ScrollUp.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
  components: {
    TheHeader,
    AddCartPage,
    ScrollUp,
    TheFooter
  },
  data() {
    return {
      showSidebar: false,
      showAddCartPage: false
    }
  },

  methods: {
    showSideBar() {
      this.showSidebar = true
    },
    closeSideBar() {
      this.showSidebar = false
    },
    addCartShow() {
      this.showAddCartPage = true
      // document.querySelector('.add-cart').classList.toggle('active-icon')
    },
    closeCart() {
      document.querySelector('.add-cart').classList.toggle('close-cart')
      setTimeout(() => {
        // perform the task after the wait
        this.showAddCartPage = false
      }, 300)
      this.showAddCartPage = false
    }
  }
}
</script>

<style>
.app {
  height: 100%;
  width: 100%;
}
.fixed-app {
  position: fixed;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.route-enter-active {
  transition: all 0.3s ease-in-out;
}
.route-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>
