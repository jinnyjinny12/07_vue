<script setup>

</script>

<template>

  <div class="orderEnd">
      <h2>주문이 완료 되었습니다!</h2>
    </div>

    <div class="orderSecond">
      <h3>
        신용카드를 뽑은 후 <br />
        출력된 영수증을 받아가세요!
      </h3>
    </div>

    <div class="orderNumber">
      <h4>주문번호</h4>
    </div>

    </template>
    

<style scoped>
.orderEnd {
  position: relative;
  top:-150px;
  /* left:165px; */
  /* right:50px; */
  /* bottom:1729px; */
  width: flex;
  height: 82px;
  margin: center;
  font-family: "BM JUA_TTF";
  letter-spacing: 3px;
  font-style: normal;
  font-size: 55px;
  line-height: 82px;
  text-align: center;

  color: #ffb834;
}

.orderSecond {
  position: relative;
  top:-160px;
  width: flex;
  height: flex;
  font-family: "BM JUA_TTF";
  letter-spacing: 4px;    
  font-size: 40px;
  line-height: 70px;
  font-weight: 0;
  text-align: center;
  font-stretch:extra-expanded;

  color: #ffb834;
}

.orderNumber {
  position: relative;
  top: -170px;
  left: 330px;  
  width: flex;
  height: 52px;
  margin: center;
  padding-left: 100px;   
  font-family: "BM JUA_TTF";
  letter-spacing: 4px;
  font-style: normal;
  font-size: 55px;
  line-height: 52px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #282808;
}


</style>