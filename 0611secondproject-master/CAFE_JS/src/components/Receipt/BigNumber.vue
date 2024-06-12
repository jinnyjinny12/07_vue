<script setup>
import { ref } from 'vue';
const Number = ref('253');
</script>

<template>

<div class="bigNumber">
      <h4>253번</h4>
    </div>
</template>

<style scoped>

.bigNumber {
  position: relative;
  top: -140px;
  left: 630px; 
  width: 306px;
  height: 124px;
  font-family: "BM JUA_TTF";
  font-style: normal;
  font-weight: 400;
  font-size: 120px;
  line-height: 124px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #282808;
}

</style>
