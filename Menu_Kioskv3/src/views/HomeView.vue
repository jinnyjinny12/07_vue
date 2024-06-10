<script setup>
import { ref, onMounted } from 'vue';
import Video from "../components/video/video.vue";
import Category from "../components/category/Category.vue";
import MenuList from "../components/menu/MenuList.vue";
</script>

<template>
  <div class="header">
    <header>
      <div>
        <h1 class="custom-font"> Cafe.js </h1>
      </div> 
    </header>

    <div>
        <Video/>
    </div>
    <div>
      <Category/>
    </div>
    <div>
      <MenuList/>
    </div>


  </div>
</template>


<style>

.header {
    text-align: center;
  }

.category {
    height: 50px;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
  }

  @font-face{
  font-family:'DNFBitBitv2';
  font-style: normal; 
  font-weight:400; 
  src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
}
  
.custom-font{
  font-family: 'DNFBitBitv2', sans-serif;
  color: #FFB834;
  text-shadow: 4px 4px 0 #783E19; /* X, Y, blur-radius, color */   
  text-align: center;
      
}
  
body {
  background-color: #BA9470;
}

</style>