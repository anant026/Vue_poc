<template>
  <div class="view">
    <h1></h1>
    <b-table striped hover responsive :items="pocdata" :fields="fields">
       
    </b-table>
  </div> 
</template>

<script>
// @ is an alias to /src

import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
  get pocdata () {
    return this.$store.getters.pocdata;
  }
   fields= ['Id', 'ProductName','Price','Availability'];
  created() {
    this.$store.dispatch('display');
  }
}
</script>
