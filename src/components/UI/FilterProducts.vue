<template>
  <div class="filter-container">
    <div class="input-field">
      <input type="text" placeholder="Search By Name" @change="filterProduct" />
    </div>
    <div class="right-side">
      <div class="input-mmin-price">
        <input type="number" placeholder="Enter Max Price" />
      </div>
      <div class="input-max-price">
        <input type="number" placeholder="Enter Min Price" />
      </div>
      <div class="filter-category">
        <select class="title" value="Select">
          <option v-for="product in productList" :key="product.id">{{ product.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getCategories')
    // this.allProduct = this.$store.getters.getAllCategories
    // console.log(this.allProduct)
  },
  computed: {
    productList() {
      //   console.log(this.$store.getters.getAllCategories)
      return this.$store.getters.getAllCategories
    }
  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
}
.input-field {
  width: 40%;
  margin-left: 25px;
}
.input-field input {
  padding: 5px;
  width: 100%;
}
.right-side {
  width: 60%;
  display: flex;
  justify-content: space-around;
}
.right-side input {
  padding: 5px;
}
select.title {
  padding: 5px;
}
option {
  font-size: 16px;
}
</style>
