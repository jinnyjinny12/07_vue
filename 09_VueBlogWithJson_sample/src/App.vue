<script setup>
import { RouterLink, RouterView } from 'vue-router'
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
  <RouterView />
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
</style>
