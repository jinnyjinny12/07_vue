<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import Item from "./OrderItem.vue"; // OrderItem.vue import 추가
import OrderSummary from "./OrderSummary.vue";
import OrderView from "./OrderView.vue";
import Button from "./Button.vue";

const router = useRouter();

const state = reactive({
  orderItems: [
    { name: "아이스 카페라떼", price: 4800, quantity: 1, totalPrice: 4800 },
    { name: "아이스 아메리카노", price: 4500, quantity: 1, totalPrice: 9000 },
    { name: "블루베리 스무디", price: 5500, quantity: 1, totalPrice: 5500 },
    { name: "딸기 마카롱", price: 2500, quantity: 1, totalPrice: 7500 },
  ],
});

const updateQuantity = (index) => (delta) => {
  let newQuantity = state.orderItems[index].quantity + delta;
  if (newQuantity < 1) {
    newQuantity = 1;
  }
  state.orderItems[index].quantity = newQuantity;
  state.orderItems[index].totalPrice =
    state.orderItems[index].price * newQuantity;
};

const total = computed(() => {
  const totalQuantity = state.orderItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = state.orderItems.reduce(
    (acc, item) => acc + item.totalPrice,
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
  <div>
    <ul>
      <Item
        v-for="(item, index) in state.orderItems"
        :key="index"
        :item="item"
        :updateQuantity="updateQuantity(index)"
      />
    </ul>
    <!-- <OrderSummary :total="total" /> -->

    <Button label="이전으로" :onClick="goBack">back</Button>
    <Button label="처음으로" :onClick="goHome">push</Button>
    <Button label="결제하기" :onClick="confirmPayment">payment</Button>
  </div>
</template>
