<script setup>
    import {useRouter} from "vue-router";
    const router =useRouter();
</script>

<template>
    <div>
        <br>
        <br>
        <button class="custom-button" @click="()=>router.push('/popup1')">신용카드</button>
        <br>
        <button class="custom-button" @click="()=>router.push('/popup2')">모바일페이</button>
    </div>
</template>

<style>
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