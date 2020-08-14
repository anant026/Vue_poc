<template>
  <article>
    <div class="container">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-right">
            <h2>Hello Admin</h2>
            <p>Please login with your personal information</p>
          </div>
        </div>
      </div>
      <div>
      <form class="sign-in" @submit.prevent="onSubmit">
        <h2>Sign In</h2>
        <input type="text" placeholder="Email"  v-model="email"/>
        <input type="password" placeholder="Password"  v-model="password"/>
        <button  type="submit">Submit</button>    
      </form>
      </div>
    </div>
  </article>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Signin extends Vue {
      email= '';
      password= '';
    
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData);
        this.$store.dispatch('login',{email:formData.email,password:formData.password})
      }
  }
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, #7fd625, #009345);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-right {
    @include overlays(0);
    right: 40px;
  }
}
h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}

button {
  border-radius: 20px;
  border: 1px solid #009345;
  background-color: #009345;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}

form {
  position: absolute;
  top: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 120px 40px 150px 90px;

  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
</style>