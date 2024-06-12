<script setup>

</script>

<template>

</template>
<!-- <template>
    <div class="cart" v-if="buy.length !== 0">
        <div v-for="wine in totalbuy" :key="wine.id" class="cart-item">
            <img class="cart-image" :src="wine.image" alt="wine image" />
            <button class="remove-btn" @click="hateWine(wine.id)">X</button>
        </div>
    </div>
</template> -->

<style scoped>

.cart {
  position: fixed; /* 장바구니를 고정 위치에 놓기 위해 사용합니다. */
  bottom: 0; /* 화면 하단에 위치시킵니다. */
  width: 100%; /* 장바구니가 화면 너비 전체를 차지하도록 설정합니다. */
  background-color: #5E7153;
  border-top: 1px solid black; /* 상단에 경계를 추가합니다. */
  padding: 1%; /* 패딩을 추가하여 내용물에 여유를 줍니다. */
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 상단 그림자를 추가하여 시각적 깊이를 줍니다. */
  z-index: 10; /* 다른 요소들보다 위에 배치되도록 z-index를 설정합니다. */
  display: flex; /* 플렉스 박스를 사용하여 내부 요소를 정렬합니다. */
  /*justify-content: space-between;  내부 요소를 양 끝에 배치합니다. */
  align-items: center; /* 내부 요소를 세로로 중앙 정렬합니다. */
}
</style>