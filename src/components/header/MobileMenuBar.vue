<template>
  <!-- <transition name="sidebar" appear> -->
  <div class="mobile-bar-container">
    <div class="close-icon">
      <svg @click="$emit('close-bar')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          fill="#fff"
          d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
        />
      </svg>
    </div>
    <nave-bar></nave-bar>
  </div>
  <!-- </transition> -->
</template>

<script>
import NaveBar from './NaveBar.vue'
export default {
  components: {
    NaveBar
  }
}
</script>

<style scoped>
.mobile-bar-container {
  width: 100%;
  height: 572px;
  position: fixed;
  top: 0;
  background: rgb(83 81 81 / 95%);
  z-index: 3;
}
.close-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 36px;
  top: 24px;
}
.close-icon svg {
  width: 30px;
}
.sidebar-enter-from {
  opacity: 0;
  transform: translateX(-350px);
}
.sidebar-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.sidebar-enter-active {
  transition: all 3s ease-in-out;
}
.sidebar-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(-350px);
}
.sidebar-leave-active {
  transition: all 3s ease-in-out;
}
</style>
