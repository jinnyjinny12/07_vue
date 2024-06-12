<script setup>
import { ref } from 'vue';
// import BigNumber from "../components/BigNumber.vue";
</script>

<template>
<div class="Bar">
</div>   
<div class="ReceiptBox">
    <BigNumber/>
    <ReceiptFix/>
</div>


</template>

<style scoped>

.bar{
position: absolute;
width: 777px;
height: 48px;
background: #363636;
border-radius: 10px;
}

.ReceiptBox {   
position: absolute;
width: 700px;
height: 600px;
background: linear-gradient( 
  rgba(219, 219, 219, 0.5) 0%,
  rgba(245, 245, 245, 0.783332) 25.53%,  
  rgba(247, 247, 247, 0.8) 66.86%,  
  rgba(183, 183, 183, 0.4) 100%);
}

</style>