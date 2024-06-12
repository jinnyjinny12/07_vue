<!-- Button.vue -->
<template>
  <button @click="handleClick">
    {{ props.label }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  onClick: Function,
});

const handleClick = () => {
  if (props.onClick) {
    props.onClick();
  }
};
</script>
