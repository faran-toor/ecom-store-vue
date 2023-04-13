<template>
  <div class="outer-check">
    <div class="section">
      <h1 class="title">My Cart</h1>
      <div class="cart-container">
        <div v-if="cartProducts.length === 0" class="cart-empty">
          <h3>Cart is empty</h3>
        </div>
        <div class="card" v-for="product in cartProducts" :key="product.id">
          <div class="clos-icon">
            <svg
              @click="deleteProduct(product.id)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"
              />
            </svg>
          </div>
          <div class="image">
            <img :src="product.thumbnail" alt="" />
          </div>
          <div class="description">
            <h1 class="product-title">
              {{ product.title }}
            </h1>
            <div class="pr-quantity">
              <span class="price"> $ {{ product.price }} </span>
              <div class="input">
                <svg
                  @click="removeOneQuantity(product.id)"
                  :class="product.quantity <= 1 ? 'display-blocked' : 'minus'"
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
                  @click="addNoQuantity(product.id)"
                  class="plus"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"
                  />
                </svg>
                <input
                  @input="cahngeInputValue(product.quantity, product.id)"
                  type="number"
                  min="1"
                  max="99"
                  v-model.number="product.quantity"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="order-card">
      <h1 class="title">My Order</h1>
      <div class="card-price">
        <div class="outer-sub-total">
          <div class="sub-total">
            <span class="title-total">Subtotal</span>
            <span class="price-sub-total">$ {{ totals }}.00</span>
          </div>
          <router-link class="shopping-link" to="/all-products">Continue Shopping</router-link>
        </div>
        <div class="total">
          <span class="title-total">Total</span>
          <span class="price-total">$ {{ totals }}.00</span>
        </div>
      </div>
      <div class="buy-button">
        <button>Buy Now</button>
      </div>
    </div>
  </div>
</template>

<script>
import QuantityInput from '../components/UI/QuantityInput.vue'
export default {
  components: { QuantityInput },
  data() {
    return {
      cartProducts: [],
      total: 0,
      quantity: 0
    }
  },
  created() {
    const product = localStorage.getItem('data')
    this.cartProducts = JSON.parse(product)
    // console.log(this.cartProducts)
  },
  computed: {
    totals() {
      this.total = 0
      this.cartProducts.forEach((product) => {
        this.total += product.price * product.quantity
      })
      return this.total
    }
  },
  mounted() {
    window.scrollTo({
      top: 0
    })
  },
  methods: {
    removeOneQuantity(id) {
      this.cartProducts.find((pro) => {
        if (pro.id === id) {
          pro.quantity -= 1
        }
      })
      localStorage.setItem('data', JSON.stringify(this.cartProducts))
    },
    addNoQuantity(id) {
      this.cartProducts.find((pro) => {
        if (pro.id === id) {
          pro.quantity += 1
        }
      })
      localStorage.setItem('data', JSON.stringify(this.cartProducts))
    },
    deleteProduct(id) {
      const index = this.cartProducts.findIndex((p) => p.id === id)
      if (index !== -1) {
        this.cartProducts.splice(index, 1)
      }
      localStorage.setItem('data', JSON.stringify(this.cartProducts))
    },
    cahngeInputValue(value, id) {
      this.cartProducts.find((pro) => {
        if (pro.id === id) {
          pro.quantity = value
        }
      })
      localStorage.setItem('data', JSON.stringify(this.cartProducts))
    }
  }
}
</script>

<style scoped>
.outer-check {
  padding: 45px 20px 40px;
  display: flex;
  width: 80%;
  margin: auto;
}
.section {
  flex-grow: 999;
}
.cart-empty {
  padding: 10px;
}
h3 {
  font-size: 22px;
  color: rgb(83 81 81 / 78%);
}
.order-card {
  margin-left: 4rem;
  width: 30%;
}
.title {
  font-weight: 500;
  color: rgb(83 81 81 / 78%);
  padding: 10px;
  border-bottom: 1px solid rgb(83 81 81 / 35%);
}
.card {
  padding: 15px;
  display: flex;
  border-bottom: 1px solid rgb(250, 250, 250);
}
.clos-icon {
  width: 18px;
  position: absolute;
  z-index: 2;
  right: 10px;
  top: 16px;
  opacity: 0;
  cursor: pointer;
}
.card:hover .clos-icon {
  opacity: 0.8;
}
.image {
  width: 140px;
  padding: 5px;
}
img {
  width: 100%;
}
.description {
  padding: 5px;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.product-title {
  font-size: 22px;
}
.pr-quantity {
  display: flex;
  justify-content: space-between;
  width: 200px;
}
span.price {
  color: red;
}
input {
  padding: 5px;
  width: 75px;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
}
input::-webkit-inner-spin-button {
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
.total-price {
  height: 15%;
  padding: 4px;
}
.total-price span {
  font-size: 25px;
  font-weight: 600;
}
.total-price p {
  font-size: 18px;
  margin-left: 20px;
  font-weight: 700;
}
.outer-sub-total {
  border-bottom: 1px solid rgb(250, 250, 250);
}
.sub-total {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.total {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(250, 250, 250);
}
span.price-sub-total {
  align-self: center;
}
.title-total {
  font-size: 22px;
}
.price-total {
  font-size: 20px;
}
.shopping-link {
  color: rgb(43, 43, 43);
}
.shopping-link:hover {
  color: rgb(83 81 81 / 78%);
}
.buy-button {
  margin-top: 2rem;
}
.buy-button button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  background: rgb(83, 81, 81);
  color: #fff;
  cursor: pointer;
}
button:hover {
  background: rgb(83 81 81 / 78%);
}
</style>
