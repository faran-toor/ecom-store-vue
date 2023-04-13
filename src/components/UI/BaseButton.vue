<template>
  <button class="add-cart-button">Add To Cart</button>
</template>

<script>
export default {}
</script>

<style scoped>
.add-cart-button {
  position: absolute;
  bottom: 6px;
  right: 0;
  left: 0;
  padding: 5px;
  font-size: 30px;
  color: #ffffff;
  background: rgb(83 81 81 / 78%);
  border: 3px solid rgb(83 81 81);
  transition-duration: 399ms;
  transition-property: transform;
  transform: translateY(120%);
  cursor: pointer;
}
.image:hover .add-cart-button {
  transition-duration: 300ms;
  transform: translateY(0%);
}
</style>
