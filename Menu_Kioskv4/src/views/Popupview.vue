<script setup>
import {useRouter} from 'vue-router';
import { ref } from 'vue';

const menu= ref({
    name:'sample name',
    price:'1000',
    img:'sample'
});

const cart = ref([]);
const router=useRouter();

const menuget = () => {

    cart.value.push({...menu.value});
    console.log('Menu added to cart:', menu.value);
    router.go(-1);
}

const propsCount = ref(0);
// 버튼을 누름에 따라 값이 변하게 만들려면 propsCount를 반응성변수로 만들어줘야함

const selectedCup =ref('');
const selectedTemp =ref('');

// 버튼 색깔에 대한 변경
const selectOption = (optionType, value) => {
  if (optionType === 'cup') {
    selectedCup.value = value;
  } else if (optionType === 'temp') {
    selectedTemp.value = value;
  }
}

</script>

<template>
    <div class="popup-container">

        <div>{{ menu.name }}</div>
        <div>{{ menu.price }}</div>
        <div>{{ menu.img }}</div>

        <br>

        <div class="quantity">
            <button @click="propsCount--">-</button>
            <div>{{ propsCount }}</div>
            <button @click="propsCount++">+</button>            
           
        </div>


        <div class="option">

            <div class="opiton-text">선택옵션</div>
            <div class="option-box">
                <!-- 버튼 선택시 선택
                선택한 상황은 버튼의 색깔변화로 노출 -->
                <!-- 컵 옵션 선택 -->
                <div class="option-group">
                    <div :class="{'selected': selectedCup === '매장전용잔'}" @click="selectOption('cup', '매장전용잔')"class="option-item">매장전용잔</div>
                    <div :class="{'selected': selectedCup === '일회용잔'}" @click="selectOption('cup', '일회용잔')"class="option-item">일회용잔</div>
                </div>
                
                <!-- 온도 옵션 선택 -->
                <div class="option-group">
                    <div :class="{'selected': selectedTemp === 'HOT'}" @click="selectOption('temp', 'HOT')" class="option-item">HOT</div>
                    <div :class="{'selected': selectedTemp === 'ICE'}" @click="selectOption('temp', 'ICE')" class="option-item">ICE</div>
                </div>
            </div>

        </div>

        <div class="button-container">
            <button class="cancel-botton" @click="()=>router.go(-1)">취소</button>
            <button class="get-button" @click="menuget">담기</button>
            <!-- menuget 이라는 함수를 작동시킨다 -->

        </div>

    </div>



</template>

<style scoped>
@font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: 'BMJUA', sans-serif;
    }



.popup-container {
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px; /* 필요한 너비에 따라 조정하세요 */
    background-color: #fff; /* 배경색 지정 */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
    

}

/* 수량조절 */
.quantity {
  display: flex;
  align-items: center; /* 요소를 수직으로 정렬합니다 */
}

.quantity button {
  margin: 0 5px; /* 버튼 간격을 조정합니다 */
}

/* 커스텀 */
.option-box div {
  padding: 10px;
  margin: 5px;

  cursor: pointer;
  text-align: center;
}
.selected {
  background-color: #783E19; /* 선택된 버튼의 색상 */
  color: #F1F1F1; /* 선택된 버튼의 텍스트 색상 */
  border: 1px solid #ccc;
}

.option-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

}

.option-item {
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  
}

/* 취소, 담기 버튼 */

.button-container {
  display: flex;
  justify-content: space-between;
}
.cancel-button, .get-button {
  padding: 10px;
  cursor: pointer;
  margin: 0 10px;

}

</style>