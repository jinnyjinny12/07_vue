<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const { reMenu } = defineProps(["reMenu"]);

function detailView(id) {
    router.push(`/reMenu/${id}`);
}
</script>

<template>
    <div class="itemBox" @click="detailView(reMenu.id)">
        <div> {{ reMenu.name }}</div>
        <div> 가격 {{ reMenu.price }}</div>
        <img :src="reMenu.img" class="itemImage" />
    </div>
</template>

<style scoped>
.itemBox {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;

    /* display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%; */
}
.itemImage {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 8px;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>