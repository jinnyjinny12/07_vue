<script setup>
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import ButtonHome from './ButtonHome.vue';
// const router = useRouter();
</script>

<template>
    <header class>
      <!-- 팝업이 떠도 안바뀌는 곳 -->
      <H1 class="custom-font">Cafe.js</H1>
      <div class="payment-select">결제수단을 선택해주세요</div>
      <div class="total-amount">총 결제금액 <span>28,000원</span></div>
      <br>
      <br>
      <div class="payment-method-container">
        <div class="payment-method">결제수단</div>
      </div>
    </header>
    <main>
        <ButtonHome/>
    </main>
</template>

<style scoped>

  @font-face{
    font-family:'DNFBitBitv2';
    font-style: normal; 
    font-weight:400; 
    src:url('//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf')format('opentype')
  }

  @font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
    /* 모든 텍스트에 기본 폰트 적용 */
    * {
    font-family: 'BMJUA', sans-serif;
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
/* 결제수단을 선택해주세요 */
.payment-select{
  background-color:#FFB834;
  color: #783E19;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px; 
  font-family: 'DNFBitBitv2', sans-serif;
  text-shadow: 
    -1px -1px 0 #FFEA28,
    1px -1px 0 #FFEA28,
    -1px 1px 0 #FFEA28,
    1px 1px 0 #FFEA28,
    -2px -2px 0 #FFEA28,
    2px -2px 0 #FFEA28,
    -2px 2px 0 #FFEA28,
    2px 2px 0 #FFEA28;
}
/* 총결제금액 */
.total-amount {
  background-color:#f9ecc9;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px; /* 위쪽 여백 추가 */
  color: #783E19; 
}
.total-amount span {
  margin-left: 100px; /* 총 결제금액과 28,000원 사이의 간격 조정 */
}
  /* 결제수단 */
  .payment-method {
  display: inline-block;
  padding: 10px 20px; /* 내부 여백 */
  background-color: #f9ecc9; /* 배경색 */
  border: 2px solid #ccc; /* 테두리 */
  border-radius: 25px; /* 타원 모양을 만들기 위한 테두리 둥글기 */
  font-size: 0.8em; /* 글자 크기 */
  margin-top: 20px; /* 상단 여백 */
}
.payment-method-container {
  margin-right: 200px;
  width: auto;
}
</style>
