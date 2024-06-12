<script setup>

import { RouterView } from 'vue-router';
import { ref } from 'vue';
import FinalView from '../views/FinalView.vue';


</script>

<template>


    <header class>
      <PaymentView />
      <FinalView />
      
    </header>
   

  <RouterView />
</template>

<style scoped>

</style>
