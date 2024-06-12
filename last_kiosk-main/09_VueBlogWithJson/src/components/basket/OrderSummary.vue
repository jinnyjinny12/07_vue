<script setup>
import { reactive } from "vue";
const total = reactive({
  quantity: 0,
  formattedPrice: 0,
});

</script>

<template>
  <div
    style="
      display: flex;
      justify-content: space-around;
      background-color: #f9ecc9;
    "
  >
    <h2 style="font-size: 30px">Total</h2>
     <p style="font-size: 30px;"> {{ total.quantity }} 개 </p>
    <p style="font-size: 30px;"> {{ total.formattedPrice.toLocaleString() }}</p>  
  </div>
</template>
