
<script setup>
import { RouterLink,RouterView,useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

</script>

<template>

    <header>
      <!-- 팝업이 떠도 안바뀌는 곳 -->
    
      <H1 class="custom-font">Cafe.js</H1>
      
      <div>결제수단을 선택해주세요</div>
      <div>총 결제금액 28,000원</div>
      <br>
      <br>


      <div>결제수단</div>

      
    </header>

    <main>
      
        <RouterView />
    </main>

</template>

<style scoped>

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

  main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  header {
  text-align: center;
  }


</style>
