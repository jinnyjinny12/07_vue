<script setup>
import {useRouter} from  'vue-router';
// popup 은 즉 HIDEENVIEW 
const router = useRouter();
</script>

<template>
    <!-- <h1> 이건 팝업입니다</h1> -->
    <div class="popup-container">
        <div clas="text"> IC카드를 삽입하시오</div>
        <img src="../../assets/image/pay.svg" alt="pay" class="pop-image" />
        <div class="button-contianer">
          <button class="cancel-button" @click="()=>router.go(-1)">결제취소</button>
          <button class="approve-button" @click="$router.push('/bill')">승인하기</button>
        </div>
    </div>
</template>

<style>

.popup-container {
  width: 300px; /* 팝업 컨테이너의 너비 */
  height: 300px; /* 팝업 컨테이너의 높이 */
  padding: 20px; /* 내부 여백 */
  background-color: #F9ECC9; /* 배경색 */
  border: 2px solid #ccc; /* 테두리 */
  border-radius: 5px; /* 테두리 둥글기 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  display: flex; /* 내부 요소를 가로로 정렬하기 위해 flex 사용 */
  flex-direction: column; /* 내부 요소를 세로로 정렬하기 위해 column 사용 */
  justify-content: center; /* 내부 요소를 수직 가운데 정렬 */
  align-items: center; /* 내부 요소를 수평 가운데 정렬 */
}

.pop-image {
    max-width: 80%;
    max-height: 40%;
    object-fit: contain;
    margin-top: 10px;
    margin-bottom: 20px;
    flex-grow: 1;
}

.text {
  margin-top: 20; /* h2 요소의 위 여백 제거 */
  margin-bottom: 20;
}

.button-container {
  display: flex; /* 버튼들을 가로로 정렬하기 위해 flex 사용 */
  /* justify-content: center; 버튼 사이의 간격을 자동으로 조절 */
  gap: 20px;
  width: 100%;
  margin-top: 20px; /* 버튼과 내용 사이 여백 */
}

.cancel-button,
.approve-button {
  padding: 10px 20px; /* 버튼 내부 패딩 */
  border: none; /* 테두리 없음 */
  border-radius: 5px; /* 테두리 둥글기 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경하여 클릭 가능한 상태로 표시 */
  transition: background-color 0.3s ease; /* 배경색 변경 시 부드러운 효과 적용 */
}

.cancel-button {
  background-color: #ff4444; /* 취소 버튼 배경색 */
  color: #fff; /* 텍스트 색상 */
}

.approve-button {
  background-color: #4caf50; /* 승인 버튼 배경색 */
  color: #fff; /* 텍스트 색상 */
}

.cancel-button:hover,
.approve-button:hover {
  background-color: #ff6666; /* 호버 상태일 때 배경색 변경 */
}

</style>