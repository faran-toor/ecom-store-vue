<template>
  <div class="container">
    <h1>Add Cart</h1>
    <div class="card">
      <div class="left-side">
        <img :src="singleProduct.thumbnail" alt="" />
      </div>
      <div class="right-side">
        <div class="content">
          <div class="title">
            <h2>{{ singleProduct.title }}</h2>
          </div>
          <!-- <p class="description">{{ product.description }}</p> -->
        </div>
        <div class="bottom">
          <span>$ {{ singleProduct.price }}</span>
          <div class="quantity">
            <label>Quantity</label>
            <div class="input">
              <svg
                @click="removeOneQuantity"
                :class="quantity <= 1 ? 'display-blocked' : 'minus'"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                />
              </svg>
              <!-- <i class="fa-solid fa-plus"></i> -->
              <svg
                @click="addNoQuantity"
                class="plus"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                />
              </svg>
              <input type="number" v-model.number="quantity" />
            </div>
          </div>

          <button @click="addToCart">Add Cart</button>

          <div class="description">
            <div class="header" @click="showDescription">
              <span> {{ content }} </span>
            </div>
            <Transition>
              <p v-if="description" class="description">
                {{ singleProduct.description }}
              </p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityInput from '../components/UI/QuantityInput.vue'
export default {
  components: {
    QuantityInput
  },
  data() {
    return {
      id: null,
      description: false,
      content: 'Show Description',
      quantity: 1,
      quantityProduct: {},
      product: []
    }
  },
  created() {
    this.id = this.$route.params.id
    this.$store.dispatch('getSignleProduct', this.id)
  },
  computed: {
    singleProduct() {
      return this.$store.getters.getSingleProduct
    }
  },
  mounted() {
    window.scrollTo({
      top: 0
    })
  },
  methods: {
    removeOneQuantity() {
      this.quantity -= 1
    },
    addNoQuantity() {
      this.quantity += 1
    },
    showDescription() {
      this.description = !this.description
      if (this.content === 'Show Description') {
        this.content = 'Hide Description'
      } else {
        this.content = 'Show Description'
      }
    },
    addToCart() {
      this.quantityProduct = { ...this.$store.getters.getSingleProduct, quantity: this.quantity }
      // console.log(this.quantityProduct)
      this.product.push(this.quantityProduct)
      if (localStorage.getItem('data')) {
        const myArrayString = localStorage.getItem('data')
        var myArray = JSON.parse(myArrayString)
        myArray.push(this.product[0])
        localStorage.setItem('data', JSON.stringify(myArray))
      } else {
        localStorage.setItem('data', JSON.stringify(this.product))
      }
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
}
h1 {
  text-align: center;
  font-size: 40px;
  color: rgba(60, 60, 60, 0.66);
  text-transform: uppercase;
}
.card {
  width: 80%;
  margin: auto;
  display: flex;
  margin-top: 2rem;
}
.left-side {
  width: 60%;
}
img {
  width: 100%;
}
.right-side {
  width: 35%;
  padding: 25px;
}
.quantity {
  display: flex;
  flex-direction: column;
}

.quantity label {
  margin-bottom: 10px;
}

.quantity input {
  padding: 5px;
  width: 75px;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}
.quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.plus {
  position: absolute;
  width: 13px;
  z-index: 1;
  opacity: 0.3;
  left: 56px;
  top: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.minus {
  position: absolute;
  width: 13px;
  z-index: 1;
  opacity: 0.3;
  left: 4px;
  top: 6px;
  cursor: pointer;
  transition: all 0.2s;
}
.display-blocked {
  position: absolute;
  width: 13px;
  z-index: 1;
  opacity: 0.3;
  left: 4px;
  top: 6px;
  cursor: pointer;
  transition: all 0.2s;
  pointer-events: none;
  opacity: 0.1;
}
.plus:hover {
  opacity: 0.8;
}
.minus:hover {
  opacity: 0.8;
}
.bottom {
  display: flex;
  flex-direction: column;
  margin-top: 22px;
}
span {
  color: red;
  font-size: 20px;
  margin-bottom: 1rem;
}
button {
  margin-top: 2rem;
  padding: 7px;
  border: none;
  color: #fff;
  font-size: 22px;
  background: rgb(83, 81, 81);
  cursor: pointer;
}
button:hover {
  background: rgb(83 81 81 / 78%);
}
.description {
  margin-top: 1rem;
}
.header {
  border-bottom: 1px solid rgba(84, 84, 84, 0.65);
}
.header span {
  color: #333;
  font-size: 20px;
  margin-bottom: 1rem;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
}
.header span:hover {
  color: #ef0606d9;
}
.header .close {
  transform: rotate(+180deg);
}
.header .show {
  width: 10px;
  position: absolute;
  right: 0;
  top: 9px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>
