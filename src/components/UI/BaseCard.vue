<template>
  <section class="base-card">
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 15%);
}
</style>
