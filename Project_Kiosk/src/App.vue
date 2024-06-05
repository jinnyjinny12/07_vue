<script setup>

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
        <div>결제수단</div>
        <div>
          <button>신용카드</button> 
        </div>
        <div>
          <button>모바일페이</button>
        </div>
      
        <!-- 애니메이션 -->
        <div class="animation">
          <div>
          <h1>
            <span>c</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
            <span>.</span>
            <span>j</span>
            <span>a</span>
            <span>v</span>
            <span>a</span>
            <span>s</span>
            <span>c</span>
            <span>r</span>
            <span>i</span>
            <span>p</span>
            <span>t</span>
          </h1>
          </div>

          <div>
          <h1>
            <span>c</span>
            <span>a</span>
            <span>f</span>
            <span>e</span>
            <span>.</span>
            <span>j</span>
            <span>a</span>
            <span>v</span>
            <span>a</span>
            <span>s</span>
            <span>c</span>
            <span>r</span>
            <span>i</span>
            <span>p</span>
            <span>t</span>
          </h1>
          </div>

        </div>


        <div>
            <button>처음으로</button>
            <button>이전으로</button>
            <button>결제하기</button>
        </div>

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

  /* 여기서부터는 애니메이션CSS */

  h1 {
    height: 100px;
  }
  

 
  h1 span {
    font-family: 'DNF Bit Bit v2', sans-serif;
    font-size: 80px;
    color: #783E19;
    text-align: center;
    position: relative;
    top: 20px;
    display: inline-block;
    /*  폰트가 부드러워지게 설정  */
    -webkit-font-smoothing: antialiased;
    /*  x축, y축, 블러 설정  */
    text-shadow: 0 1px 0 #ccc, 
                 0 2px 0 #ccc, 
                 0 3px 0 #ccc,  
                 0 4px 0 #ccc, 
                 0 5px 0 #ccc, 
                 0 6px 0 transparent,
                 0 7px 0 transparent,
                 0 8px 0 transparent,
                 0 9px 0 transparent,
                 0 10px 10px rgba(0,0,0,0.4);
    animation: bounce 0.3s ease infinite alternate; 
    /* ease 애니메이션의 진행속도  
    infinite 무한반복
      alternate 애니메이션 무한반복 */
    }

    h1 span:nth-child(2){animation-delay: 0.1s;}
    h1 span:nth-child(3){animation-delay: 0.2s;}
    h1 span:nth-child(4){animation-delay: 0.3s;}
    h1 span:nth-child(5){animation-delay: 0.4s;}
    h1 span:nth-child(6){animation-delay: 0.5s;}
    h1 span:nth-child(7){animation-delay: 0.6s;}
    h1 span:nth-child(8){animation-delay: 0.7s;}
    h1 span:nth-child(9){animation-delay: 0.8s;}
    h1 span:nth-child(10){animation-delay: 0.9s;}
  
    @keyframes bounce {
        100% {
            top: -20px;
            text-shadow: 0 1px 0 #ccc,
                        0 1px 0 #ccc,
                        0 3px 0 #ccc,
                        0 4px 0 #ccc,
                        0 5px 0 #ccc,
                        0 6px 0 #ccc,
                        0 7px 0 transparent,
                        0 9px 0 transparent,
                        0 9px 0 transparent,
                        0 10px 0 transparent,
                        0 11px 0 transparent,
                        0 50px 20px rgba(0,0,0,0.4);
        }
    }



</style>
