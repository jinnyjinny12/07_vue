<script setup>
import Animation from '../pay/Animation.vue'
</script>

<template>
    <div class="container">
             <div class="logo1">cafe.js</div>
        <div class="logo2">cafe.js</div>
      <div>
        <h1 class="text">주문이 완료되었습니다</h1>
      </div>
      <div class="animation-wrapper">
        <Animation />
      </div>
    </div>
</template>

<style>
.container {
    position: relative;
    width: 1080px;
    height: 1920px;
    margin: auto;
    background: linear-gradient(180deg,
            #5e7153 20%,
            #af9544 50%,
            #d7a63c 75%,
            #ffb834 100%);
}
.logo2 {
    position: relative;
    top: -165px;
    left: 320px;
    /* right:50px; */
    /* bottom:1729px; */
    margin: center;
    width: 394px;
    height: 146px;
    font-family: "DNF Bit Bit v2";
    font-style: normal;
    font-weight: 100;
    font-size: 60px;
    line-height: 146px;
    text-align: center;

    color: #ffb834;
}
.logo1 {
    position: relative;
    top: 80px;
    left: 310px;
    margin: center;
    width: 394px;
    height: 146px;
    font-family: "DNF Bit Bit v2";
    font-style: normal;
    font-weight: 100;
    font-size: 60px;
    line-height: 146px;
    text-align: center;

    color: #783e19;
}
.text{
    font-family: "DNF Bit Bit v2";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* 필요에 따라 조정 */
    font-size: 30px; /* 원하는 크기로 조정 */
    border: 2px solid #FFB834; /* 원하는 색상과 두께로 조정 */
    background-color: #FFB834;
    color: #783e19;
    padding: 10px; /* 텍스트와 테두리 간의 간격 조정 */
    box-sizing: border-box; /* 패딩을 포함하여 width와 height를 계산 */
    letter-spacing: 10px;
}
.animation-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; /* 필요에 따라 조정 */
}
.receipt {

  position: relative;
  width: 306px;
  height: 124px;
  font-family: 'BM JUA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 124px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #282808;
}
.receipt-header {
  position: relative;
  width: 626px;
  height: 0px;
  border: 5px dashed #797979;
}
.dashed-line {
  position: relative;
  width: 626px;
  height: 0px;
  border: 5px dashed #959595;
}
.order-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.order-number,
.order-date {
  font-weight: bold;
}
.order-number {
  text-align: left;
}
/* 2024-06-12 */
.order-date {
  position: relative;
  width: flex;
  height: 36px;
  font-family: 'BM JUA_TTF';
  font-style: normal;
  font-size: 35px;
  line-height: flex;
  display: flex;
  align-items: center;
  text-align: right;
  color: #949494;
}
</style>
