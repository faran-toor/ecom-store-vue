<template>
  <div class="container">
    <form @submit.prevent="checkUser" action="" class="login-form">
      <h1 class="header">Login Form</h1>
      <div class="fields-card">
        <label for="email" class="content">Enter Email</label>
        <input id="email" type="email" placeholder="example@gmail.com" v-model="email" />
      </div>
      <div class="fields-card">
        <label for="password" class="content">Enter Password</label>
        <input id="password" type="password" placeholder="Enter Password" v-model="password" />
      </div>
      <div class="link">
        <router-link :to="{ name: 'singup' }">Don't have acount?</router-link>
      </div>
      <div class="submit">
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  created() {
    this.$store.getters.getUserData
  },
  methods: {
    async checkUser() {
      const data = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('authenticateUser', data)
      this.$store.dispatch('getUserDetail')
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  top: 5rem;
  width: 400px;
  margin: auto;
  background: rgb(223 206 206);
  border-radius: 10px;
  padding: 10px;
}
form.login-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
}
h1.header {
  text-align: center;
  padding: 10px;
  text-transform: uppercase;

  font-weight: 600;
}
.fields-card {
  height: 25%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
}
label.content {
  font-size: 18px;
  font-weight: 500;
}
.link {
  margin-left: 10px;
  width: 131px;
  cursor: pointer;
}
.link a {
  text-decoration: none;
  z-index: 2;
}
.link::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 131px;
  bottom: 1px;
  height: 4px;
  left: -2px;
  background-color: rgb(53, 51, 51);
  transition: all 0.2s ease-in-out;
}
.link:hover::after {
  height: 15px;
}
.link:hover a {
  color: #fff;
}

.submit {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.submit button {
  padding: 10px;
  width: 100px;
  background: #eeeeeee0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
</style>
