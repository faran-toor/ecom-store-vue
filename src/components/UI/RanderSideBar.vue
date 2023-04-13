<template>
  <div class="side-bar-display">
    <div class="close-icon" @click="$emit('close-sidebar')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
        />
      </svg>
    </div>
    <div class="links">
      <router-link to="/">home</router-link>
      <router-link to="/all-products">products</router-link>
      <router-link to="/about">about</router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side-bar-display {
  width: 260px;
  height: 76%;
  background: black;
  position: fixed;
  transition: all 0.3s;
  left: 16px;
  top: 164px;
  z-index: 1;
}
.close-icon {
  width: 30px;
  position: absolute;
  top: 12px;
  left: 22px;
  cursor: pointer;
}
.close-icon svg path {
  fill: white;
}
.links {
  position: absolute;
  top: 55px;
  display: flex;
  flex-direction: column;
  left: 5px;
  padding: 10px;
}
.links a {
  text-decoration: none;
  font-size: 40px;
  color: white;
}
.show-side {
  opacity: 1;
  z-index: 1;
}
</style>
