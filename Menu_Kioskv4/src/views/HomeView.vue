<script setup>

import TheWelcome from '@/components/menu/TheWelcome.vue';


// const router=useRouter();



// const selectedCategory = ref(0);
// const updateCategory = (index) => {
//   selectedCategory.value = index;
// };


</script>

<template>

  <div class="header">
    <header>
      <div>
        <h1 class="custom-font"> Cafe.js </h1>
      </div> 
    </header>

   <main>
    <TheWelcome />
   </main>
 </div>
  <!-- <button class="custom-button" @click="()=>router.push('/popup')">일단버튼</button> -->

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


/* 커스텀 버튼 */

.custom-button {

width: 300px;
height: 50px;
/* 폰트 설정 */
font-family: 'Arial', sans-serif;
font-size: 16px; /* 폰트 크기 설정 */
font-weight: bold; /* 폰트 굵기 설정 */

/* 배경색과 테두리 설정 */
background-color: #F9ECC9; /* 버튼 배경색 */
color: #783E19; /* 텍스트 색상 */
border: none; /* 테두리 없음 */
border-radius: 5px; /* 테두리 둥글기 설정 */

/* 패딩과 여백 설정 */
padding: 10px 40px; /* 내부 패딩 설정 (상하 10px, 좌우 20px) */
margin: 5px; /* 외부 여백 설정 (버튼 주위에 여백 추가) */

/* 기타 스타일 설정 */
cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능한 상태로 표시 */
transition: background-color 0.3s ease; /* 배경색 변경 시 부드러운 효과 적용 */

/* 호버 상태일 때 배경색 변경 */
&:hover {
  background-color: #FFB834; /* 호버 상태일 때 배경색 변경 */
}

/* 액티브 상태일 때 배경색 변경 */
&:active {
  background-color: #003f7f; /* 액티브 상태일 때 배경색 변경 */
}
}

</style>