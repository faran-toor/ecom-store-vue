<template>
  <header class="header">
    <Logo />
    <div class="nav-log">
      <NaveBar />
      <Login class="login" @add-cart="$emit('add-cart')" />
    </div>
    <div v-if="iconMenu" class="nav-mobile" @click="showMenuBar">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M32 288c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 288zm0-128c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 160z"
        />
      </svg>
    </div>
  </header>
  <transition name="slide">
    <mobileMenu v-if="showMenu" @close-bar="closeMenuBar"></mobileMenu>
  </transition>
</template>

<script>
import Logo from './Logo.vue'
import NaveBar from './NaveBar.vue'
import Login from './Login.vue'
import mobileMenu from './MobileMenuBar.vue'
export default {
  data() {
    return {
      showMenu: false,
      iconMenu: true
    }
  },
  components: {
    Logo,
    NaveBar,
    Login,
    mobileMenu
  },
  mounted() {
    if (window.innerWidth > 450) {
      this.iconMenu = false
    }
  },
  methods: {
    showMenuBar() {
      this.showMenu = true
    },
    closeMenuBar() {
      this.showMenu = false
    }
  }
}
</script>

<style scoped>
.header {
  background-color: rgb(83, 81, 81);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 3;
}
.login {
  margin-left: 55px;
}
.nav-log {
  display: flex;
  margin-right: 20px;
}
@media (max-width: 450px) {
  .nav-log {
    display: none;
  }
}
.nav-mobile {
  width: 50px;
  height: 40px;
  background: white;
}
.nav-mobile svg {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 4px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
}

/* .section-enter-from {
  top: 100vh;
}
.section-enter-to {
  top: 0;
}
.section-enter-active {
  transition: 0.5s;
}

.section-leave-from {
  top: 0;
}
.section-leave-to {
  top: -100vh;
}
.section-leave-active {
  transition: 0.5s;
} */
</style>
