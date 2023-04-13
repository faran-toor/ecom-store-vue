<template>
  <div class="container">
    <form @submit.prevent="submitData" class="sing-up-form">
      <h1 class="header">Singup Form</h1>
      <div class="fields-card">
        <label for="name" class="content">Enter your Name</label>
        <input id="name" type="text" placeholder="Enter your name" v-model="name" />
      </div>
      <div class="fields-card">
        <label for="email" class="content">Enter Email</label>
        <input id="email" type="email" placeholder="example@gmail.com" v-model="email" />
      </div>
      <div class="fields-card">
        <label for="password" class="content">Enter Password</label>
        <input id="password" type="password" placeholder="Enter Password" v-model="password" />
      </div>
      <div class="link">
        <router-link :to="{ name: 'login' }">Already have acount?</router-link>
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
      name: '',
      email: '',
      password: '',
      avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867'
    }
  },
  methods: {
    async submitData() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        avatar: this.avatar
      }
      // console.log(data)
      await this.$store.dispatch('checekEmail', this.email)
      if (this.$store.getters.getEmailVerify) {
        await this.$store.dispatch('uploadData', data)
        this.$router.push({ path: '/login' })
      } else {
        document.querySelector('.error').classList.add('display-error')
      }
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
form.sing-up-form {
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
  width: 150px;
}
.link:hover {
  color: #fff;
}
.link a {
  text-decoration: none;
  z-index: 2;
}

.link::after {
  content: '';
  display: inline-block;
  position: absolute;
  width: 144px;
  bottom: 1px;
  height: 4px;
  left: -2px;
  background-color: rgb(31, 30, 30);
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
