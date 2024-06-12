<script setup>
import { defineProps } from "vue";
import Button from "./Button.vue"; // Button 컴포넌트 임포트
const props = defineProps({
  item: Object,
  updateQuantity: Function
});

const decrementQuantity = () => {
  props.updateQuantity(-1);
};

const incrementQuantity = () => {
  props.updateQuantity(1);
};
</script>

<template>
  <div style="display: flex; align-items: center; width: 100% ; background-color: #F9ECC9;margin: 0 0 40px 0;" >
    &#8226;
    <li
      style="
        display: flex;
        align-items: center;
        margin: 20px 0;
        justify-content: space-around;
        width: 100%;
      "
    >
      <div style="width: 290px; font-size: 30px; margin-left: -70px">
        {{ item.name }}
      </div>
      <div>
        <Button label="-" :onClick="decrementQuantity" class="button">-</Button>
        {{ item.quantity }}
        <Button label="+" :onClick="incrementQuantity" class="button">+</Button>
      </div>
      <div>{{ item.price.toLocaleString() }}원</div>
    </li>
  </div>
</template>
