<script setup>

</script>

<template>
  <header>
    <hearder>
      <div class="container">
        <h1 class="custom-font1"> Cafe.js </h1>
        <div class="flex-contianer">

          <div class="box">
            <br>
            <div calss="custom-font2">
              <h3 >결제 수단을 선택해주세요</h3>

            </div>

          </div>

        </div>
        
      </div>
    
    </hearder>
     
  </header>
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
    font-family: 'DNFBitBitv2', sans-serif;
    color: #FFB834;
    text-shadow: 4px 4px 0px #783E19;
    text-align: center;
  }

  .custom-font2 {
    font-family: 'BMJUA', sans-serif;
    color: #783E19;
    text-align: center;

  }

  body {
    background-color: #BA9470;
  }

  .box {
    background-color: #5E7153;
    margin: 0 auto;
    margin-top: 50px;
    width: 500px;
    height: 800px;
    display: flex;
    justify-content: center;
  }

  

  /* 반응형: 넣을까? 말까? */

  @media (max-width: 768px) {
    .box {
      width: 300px;
      height: 600px;

    }
  }

  @media (max-width: 576px) {
    .box {
      width: 200px;
      height: 400px;
    }
  }

  

</style>
