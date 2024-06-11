<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ShoppingCart from '@/components/Shoppingcart.vue';
import DetailsView from './views/DetailsView.vue';
import {ref, provide } from 'vue';

const count = ref(1);
provide("count", count);


</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/post">Post</RouterLink>        
      </nav>
    </div>
  </header>
  <main>
    <RouterView />

  </main>
  
  <footer class="footer">
    <h1> 갯수1: {{ count }}</h1>
    <ShoppingCart />

  </footer>
  
</template>

<style scoped>
header{
  display: flex;
  flex-direction: column;
  align-items: center;
}
a{
  margin-left: 10px;
  font-size: 20px;
}

.main{
  overflow-y: auto
}

.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.5); /* 투명한 회색 */
  text-align: center;
  padding: 1rem;
}

</style>
