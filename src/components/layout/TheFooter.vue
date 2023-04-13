<template>
  <div class="footer-section">
    <div class="card">
      <div class="costomer-care-card">
        <h2 class="tit">Costomer Care</h2>
        <div class="content">
          <ul class="content">
            <li><a> FAQ </a></li>
            <li><router-link to="/shipping-returns"> Shipping & Returns </router-link></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="connect-links-card">
        <h2 class="tit">Connect</h2>
        <ul class="content">
          <li><a href=""> Instagram </a></li>
          <li><a href=""> Twitter </a></li>
          <li><a href="">Facebook</a></li>
        </ul>
      </div>
      <div class="company-card">
        <h2 class="tit">The Store</h2>
        <ul class="content">
          <router-link to="/"> Home </router-link>
          <router-link to="all-products">Shop All </router-link>
          <router-link to="/about">About</router-link>
        </ul>
      </div>
      <div class="sing-card">
        <h2 class="tit">Sign up for special offers</h2>
        <div class="email-form">
          <div class="input">
            <label for="email">Enter your email here*</label>
            <input type="text" id="email" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-section[data-v-db5876b4] {
  margin-top: 1rem;
  width: 100%;
  height: 400px;
  background: rgb(81, 81, 85);
  padding: 20px;
  position: relative;
  bottom: 0;
}
.card {
  display: flex;
  margin-top: 3rem;
}
.costomer-care-card {
  width: 24%;
}
.connect-links-card {
  width: 24%;
}
.company-card {
  width: 24%;
}
.sing-card {
  width: 28%;
}
h2.tit {
  color: #fff;
  font-size: 30px;
}
ul.content {
  list-style: none;
  padding: 0;
  margin-top: 30px;
  display: grid;
}
li {
  margin-top: 5px;
}
a {
  text-decoration: none;
  color: #dddada;
  font-size: 18px;
}
a:hover {
  color: #fff;
  text-decoration: underline;
}
.input {
  width: 100%;
  margin-top: 10px;
}
input {
  background: transparent;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border-bottom: 3px solid #fff;
}
input:focus {
  /* background: rgba(235, 235, 235, 0.64); */
  color: #fff;
  outline: none;
  border-bottom: 3px solid #c1bfbf;
}
label {
  color: #fff;
  font-size: 18px;
}
button {
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  font-size: 18px;
  background: #fff;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #c1bfbf;
}
</style>
