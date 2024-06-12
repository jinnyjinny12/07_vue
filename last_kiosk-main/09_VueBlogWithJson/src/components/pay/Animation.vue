<template>
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
    </template>
    
    <style>
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
        text-shadow: 0 1px 0 #FFEA28, 
                     0 2px 0 #FFEA28, 
                     0 3px 0 #FFEA28, 
                     0 4px 0 #FFEA28, 
                     0 5px 0 #FFEA28, 
                     0 6px 0 #FFEA28,
                     0 7px 0 #FFEA28,
                     0 8px 0 #FFEA28,
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
        h1 span:nth-child(11){animation-delay: 1.0s;}
        h1 span:nth-child(12){animation-delay: 1.1s;}
        h1 span:nth-child(13){animation-delay: 1.2s;}
        h1 span:nth-child(14){animation-delay: 1.3s;}
        h1 span:nth-child(15){animation-delay: 1.4s;}
        h1 span:nth-child(16){animation-delay: 1.5s;}
      
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