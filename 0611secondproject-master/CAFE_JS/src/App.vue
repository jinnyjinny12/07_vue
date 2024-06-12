<script setup>

import OrderReceipt from "./components/OrderReceipt.vue";
import Animation from "./components/Animation.vue";

</script>


<template>

    <main>
    <OrderReceipt />
    </main>

</template>



<style scoped>
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


</style>

