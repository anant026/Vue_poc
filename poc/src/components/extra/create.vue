<template>
 <div class="container">
     <form  @submit.prevent="onSubmit">
         <h3>Add Product</h3>
    <label for="product_name">Product Name</label>
      <input type="text" name="product_name" id="product_name"  v-model="productName"><br><br><br>
      <label for="price">Price</label>
      <input type="number" name="price" id="price" v-model="price"><br><br><br>
      <label for="Availability">Availability</label>
      <input type="text" name="avail" id="avail" v-model="availability"><br><br><br>
      <button  type="submit">Add</button>
      </form>
 </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from '../../axiospoc';
import router from '../../router/index'
@Component
export default class Create extends Vue {
      productName= '';
      price= 0;
      availability='';
    
      onSubmit () {
        const formData = {
          productName:this.productName,
          price:this.price,
          availability:this.availability
        }
        console.log(formData);
        const p=parseInt(formData.price)
        axios.post('/add',{'ProductName': formData.productName,Price:p,Availability:formData.availability})
       .then(res =>{
       console.log(res);
       this.$store.dispatch('display');
       router.replace('/about')
       })
      }
  }
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 400px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);


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
h3 {
 // margin-bottom: 2px;
  //margin-top: 1px;
  font-weight: bold;
}
form {
  position: absolute;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
 // transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 8px 8px;
    width: 100%;
    border-radius: 15px;
   border-bottom: 1px solid #ddd;
   &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
}
</style>
