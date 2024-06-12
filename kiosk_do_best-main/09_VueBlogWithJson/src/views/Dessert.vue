<script setup>
import { useRouter } from "vue-router";
import { useDessertStore } from "@/stores/menu";
import { onMounted } from "vue";

const router = useRouter();
const { dessert } = defineProps(["dessert"]);

function detailView(id) {
    router.push(`/dessert/${id}`);
}

const dessertStore = useDessertStore();

onMounted(() => {
    dessertStore.dessertHandler();
})
</script>

<template>
    <main>
        <div v-for="dessert in dessertStore.desserts" class="listBox">
            <div :key="dessert.id" :dessert="dessert" @click="detailView(dessert.id)" class="itemBox">
                <div> {{ dessert.name }}</div>
                <div> 가격 {{ dessert.price }}</div>
                <img :src="dessert.img" class="itemImage" />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin-top: 1.5%;
    margin-left: auto;
    margin-right: auto;
    border: 1px dotted;
}

.listBox {
    width: 70%;
}

.itemBox {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    max-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
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