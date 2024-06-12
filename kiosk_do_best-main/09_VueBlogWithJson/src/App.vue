<script setup>
import { RouterLink, RouterView } from 'vue-router'
import cart from './views/cart.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">

      <nav>
        <RouterLink to="/">추천메뉴</RouterLink>
        <RouterLink to="/home2">커피</RouterLink>
        <RouterLink to="/deCoffee">디카페인</RouterLink>
        <RouterLink to="/smoothie">스무디</RouterLink>
        <RouterLink to="/teaAde">티,에이드</RouterLink>
        <RouterLink to="/dessert">디저트</RouterLink>       
      </nav>
    </div>
  </header>
  <RouterView />
  <cart/>
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
