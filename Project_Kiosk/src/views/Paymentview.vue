<script setup>
 import Animation from "../components/Animation.vue"
 import Paybutton from "../components/Button.vue"

</script>

<template>
  <header>
    <h1 class="custom-font1"> Cafe.js </h1>
  </header>

  <div class="container">

    <div class="box">
      <br>
      <br>
      <div class="vertical-section"> 
        <!-- 세로로 컴포넌트들을 정리해준다 -->
      <div class="parent">
        
        <div class="custom-font3">
        <h3 >결제 수단을 선택해주세요</h3>
        </div>
        <div class="dot"></div>

      </div>  
        
        <div>
          <div>총 결제금액</div>
        
          <!-- {{ 총 금액 + "원"}} -->
          <div>총 금액</div>
        </div>
        <!-- 위치는 박스 왼쪽에 -->
        <div>
          <h3>결제수단</h3>
        </div>
        
        
      
        <main>
           <Paybutton />

           <Animation />

          <div>
            <button>처음으로</button>
            <button>이전으로</button>
            <button>결제하기</button>
          </div>

        </main>



     
      </div>

    </div>

  </div>

</template>

<style>

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


  .custom-font1 {
    
      position: absolute;
      width: 394px;
      height: 146px;
      left: 339px;
      top: 0px;

      font-family: 'DNF Bit Bit v2';
      font-style: normal;
      font-weight: 400;
      font-size: 100px;
      line-height: 146px;
      text-align: center;
      color: #FFB834;
      text-shadow: 10px 10px 0px #783E19;


  }

  .custom-font2 {
    font-family: 'BMJUA', sans-serif;
    color: #783E19;
    text-align: center;
    text-shadow:
      1px 1px 0 #FFEA28,
      -1px -1px 0 #FFEA28,
      1px -1px 0 #FFEA28,
      -1px 1px 0 #FFEA28;
    letter-spacing: 0.1em;
    font-size: 40px;

  }

  .custom-font3 {
    font-family: 'DNF Bit Bit v2', sans-serif;
    color: #783E19;
    text-align: center;
    text-shadow:
      1px 1px 0 #FFEA28,
      -1px -1px 0 #FFEA28,
      1px -1px 0 #FFEA28,
      -1px 1px 0 #FFEA28;
    letter-spacing: 0.1em;
    font-size: 40px;
    
  }
  
  .container{
    /* display: flex;
    justify-self: center;
    align-items: center;
    height: 100vh; */

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #BA9470;

  }

  body {
    background-color: #BA9470;
  }

  .box {
    position: relative;
    width: 900px;
    height: 1720px;
    left: 50px;
    top: 500px;
    background: #5E7153;
    border-radius: 10px 10px 0px 0px;
    margin-top: 50px;

  }

  .dot{
    /* position: absolute;
    width: 863px;
    height: 5px;
    left: 0px;
    bottom: -20px;
    background-color: #783E19; */

    position: absolute;
    width: 863px;
    height: 5px;
    left: 50%;
    transform: translateX(-50%);
    bottom: -20px;
    /* border-bottom: 1px dotted #783E19; */
    background-color: #783E19;

  }

  .parent {
    position: relative;
  }



</style>
