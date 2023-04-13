<template>
  <div>
    <div class="side-bar" v-if="sideBar">
      <svg @click="$emit('show-sidebar')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideBar: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        // console.log('scroll')
        this.sideBar = true
      } else if (window.scrollY < 400) {
        this.sideBar = false
      }
    }
  }
}
</script>

<style scoped>
.side-bar {
  width: 47px;
  position: fixed;
  top: 167px;
  left: 16px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;
  z-index: 1;
}
</style>
