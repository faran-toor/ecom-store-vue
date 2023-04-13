<template>
  <div class="container" @click="$emit('close-cart')"></div>
  <!-- <transition-group name="cart" appear> -->
  <div class="add-cart">
    <div class="title">
      <div class="close-icon">
        <svg
          @click="$emit('close-cart')"
          class="close-icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
          />
        </svg>
      </div>
      <transition name="cartTitle">
        <h1>Cart</h1>
      </transition>
    </div>

    <div class="section">
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
          <p class="description">
            {{ product.title }}
          </p>
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

    <div class="total-price">
      <span>Subtotal</span>
      <p>$ {{ totals }}</p>
    </div>
    <div class="footer">
      <router-link to="/check-cart"><button>Check Out</button></router-link>
    </div>
  </div>
  <!-- </transition-group> -->
</template>

<script>
import QuantityInput from '../UI/QuantityInput.vue'
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
.container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: black;
  opacity: 0.2;
}
.add-cart {
  position: fixed;
  right: 0;
  top: 0;
  width: 325px;
  background: #fff;
  height: 665px;
  z-index: 4;
  animation-name: myAnimation;
  animation-duration: 0.5s;
  /* display: none; */
}

@keyframes myAnimation {
  0% {
    transform: translateX(+325px);
  }

  100% {
    transform: translateX(0);
  }
}
.close-cart {
  animation-name: myAnimationClose;
  animation-duration: 0.5s;
}
@keyframes myAnimationClose {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(+325px);
  }
}
.title {
  background: rgb(83, 81, 81);
}
.title h1 {
  text-align: center;
  padding: 25px;
  text-transform: uppercase;
  font-size: 35px;
  color: #fff;
}
.close-icon svg {
  width: 20px;
  position: absolute;
  top: 40px;
  left: 15px;
  /* transition: transform 2s ease-in-out; */
  transform: rotate(180deg);
  cursor: pointer;
  z-index: 1;
}

.close-icon path {
  fill: #fff;
}
.cart-empty {
  padding: 15px;
  text-align: center;
  height: 60%;
}
.cart-empty h3 {
  font-size: 24px;
}
.section {
  height: 60%;
  overflow-y: scroll;
}
.section::-webkit-scrollbar {
  display: none;
}
.card {
  padding: 15px;
  display: flex;
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
  width: 200px;
}
p.description {
  font-size: 16px;
}
.pr-quantity {
  display: flex;
  justify-content: space-between;
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
.footer button {
  padding: 10px;
  width: 90%;
  margin-left: 15px;
  font-size: 22px;
  color: #fff;
  background: rgb(83, 81, 81);
  border: none;
  cursor: pointer;
}
.footer:hover button {
  background: rgb(83 81 81 / 78%);
}
.cartTitle-enter-from {
  opacity: 0;
  transform: scaleY(-30px);
}
.cartTitle-enter-to {
  opacity: 1;
  transform: scaleY(0px);
}
.cartTitle-enter-active {
  transition: all 2s ease;
}
.cart-enter-from {
  opacity: 0;
  transform: translateX(350px);
}
.cart-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.cart-enter-active {
  transition: all 2s ease-in-out;
}
.cart-leave-from {
  transform: translateX(0px);
}
.cart-leave-to {
  opacity: 0;
  transform: translateX(-350px);
}
.cart-leave-active {
  transition: all 2s ease-in-out;
}
</style>
