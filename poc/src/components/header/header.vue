<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">Poc On Go Lang </router-link>
    </div>
    <nav>
      <ul>
        <li  v-if="!auth">
          <router-link to="/signin"> <b-button variant="outline-primary">
        <b-icon icon="person-fill"></b-icon> Sign In
      </b-button></router-link>
        </li>
        <li  v-if="auth">
           <b-button variant="outline-info" class="logout" @click="Logout()">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
    </b-button>
         
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Header extends Vue {
  get auth() {
    return this.$store.getters.isAuthenticated;
  }
  Logout() {
    this.$store.dispatch('logout');
  }
  }
</script>

<style scoped>
  #header {
    height: 56px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    background-color: #521751;
    padding: 0 20px;
  }

  .logo {
    font-weight: bold;
    color: white;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  nav {
    height: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-flow: row;
    align-items: center;
  }

  li {
    margin: 0 16px;
  }

  li a {
    text-decoration: none;
    color: white;
  }

  li a:hover,
  li a:active,
  li a.router-link-active {
    color: #fa923f;
  }
  .logout {
    background-color: transparent;
    border: none;
    font: inherit;
    color: white;
    cursor: pointer;
  }
</style>