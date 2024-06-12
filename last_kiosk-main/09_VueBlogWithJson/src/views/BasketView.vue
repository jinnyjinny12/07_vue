<script setup>
// import { defineProps } from 'vue';
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
    <RouterLink to="/">처음으로</RouterLink> 
    <RouterLink to="/button">Button View</RouterLink> 
    <RouterLink to="/order">결제정보</RouterLink>
    <RouterLink to="/order-summary">주문화면</RouterLink>
    <!-- <RouterLink to="/parent-component">결제화면 </RouterLink> -->
</div>
<RouterView/>
</template>
