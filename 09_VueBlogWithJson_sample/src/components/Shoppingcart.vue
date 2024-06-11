<script setup>
import {ref, inject } from 'vue';

import DetailsView from '@/views/DetailsView.vue';
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore();

// const propsCount = ref(0);
// provide('count', propsCount);

const propsCount = inject("count");

</script>

<template>
        <h1> 갯수 : {{ propsCount }}</h1>
    <DetailsView />

    <ul>
        <li v-for="(item, index) in cartStore.cartItems" :key= "index">
            {{ item.name }}  {{ item.price }}  {{ propsCount }}
        </li>

    </ul>

</template>

<style scoped>

</style>