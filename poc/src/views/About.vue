<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-table striped hover responsive :items="pocdata" :fields="fields">
       <template v-slot:cell(action)='row'>
        <b-button size="sm"  class="mr-2">
          Update
        </b-button>
        <b-button size="sm"  class="mr-2" @click="deletedata(row.item)" >
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
  
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from '../axiospoc'
@Component
export default class About extends Vue {
  get pocdata () {
    return this.$store.getters.pocdata;
  }
   fields= ['Id', 'ProductName','Price','Availability', 'action'];
  created() {
    this.$store.dispatch('display');
  }
   deletedata(row) {
     const a="google"
     const p='Product_Name'
     console.log(row.ProductName);
     //axios.delete('/delete/{{$row.Id}}')
     axios.post('/add',{Id:row.Id,'ProductName': 'samsung',Price:1200,Availability:row.Availability})
     .then(res =>{
       console.log(res);
       this.$store.dispatch('display');
       })
   }
  }
</script>
