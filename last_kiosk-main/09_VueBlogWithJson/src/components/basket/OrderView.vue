<script setup>
import { reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Item from "./OrderItem.vue"; // OrderItem.vue import 추가
import OrderSummary from "./OrderSummary.vue";
import Button from "./Button.vue";

const router = useRouter();

const state = reactive({
  orderItems: [
    { name: "아이스 카페라떼", price: 4800, quantity: 1 },
    { name: "아이스 아메리카노", price: 4500, quantity: 1 },
    { name: "블루베리 스무디", price: 5500, quantity: 1 },
    { name: "딸기 마카롱", price: 2500, quantity: 1 },
  ],
});

const updateQuantity = (index) => (delta) => {
  let newQuantity = state.orderItems[index].quantity + delta;
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  state.orderItems[index].quantity = newQuantity;
};

const total = computed(() => {
  const totalQuantity = state.orderItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = state.orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return {
    quantity: totalQuantity,
    formattedPrice: totalPrice.toLocaleString() + "원",
  };
});

const goBack = () => {
  if (window.confirm("이전 페이지로 이동하시겠습니까?")) {
    router.go(-1);
  }
};

const goHome = () => {
  if (window.confirm("처음 페이지로 이동하시겠습니까?")) {
    router.push("/");
  }
};

const confirmPayment = () => {
  if (window.confirm("결제를 진행하시겠습니까?")) {
    router.push("/payment");
  }
};
</script>

<template>
  <div style="background-color: #5e7153">
    <ul>
      <div style="background-color: #ffb834; font-size: 40px; color: #783e19">
        <hr />
        <p class="custom-font">주문하신 내역을 확인 해 주세요</p>
        <hr />
      </div>
      <Item
        v-for="(item, index) in state.orderItems"
        :key="index"
        :item="item"
        :updateQuantity="updateQuantity(index)"
      />
    </ul>
    <OrderSummary :total="total" />
    <div style="width: 100%; display: flex; justify-content: space-around">
      <div label="이전으로 돌아가기" :onClick="goBack" class="div_button">
        <img src="../../assets/image/imagesss.png" style="width: 50px; height: auto" />
        이전으로
      </div>
      <div label="처음으로 돌아가기" :onClick="goHome" class="div_button">
        <img
          src="../../assets/image/png-transparent-computer-icons-house-house-angle-building-black-thumbnail.png"
          style="width: 50px; height: auto; margin-right: 10px"
        />
        처음으로
      </div>
      <div label="결제하기" :onClick="confirmPayment" class="div_button">
        <img
          src="../../assets/image/wewew.png"
          style="width: 50px; height: auto; margin-right: 10px"
        />
        결제화면
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "DNFBitBitv2";
  src: url("//cdn.df.nexon.com/img/common/font/DNFBitBitv2.otf") format("woff2");
}

.custom-font {
  font-family: "DNFBitBitv2";
}
</style>
