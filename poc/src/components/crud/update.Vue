<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Update extends Vue {
      email= '';
      password= '';
    
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData);
        //this.$store.dispatch('login',{email:formData.email,password:formData.password})
      }
  }
</script>

<style scoped>
</style>