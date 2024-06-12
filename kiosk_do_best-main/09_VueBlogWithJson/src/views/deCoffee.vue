<script setup>
import { useRouter } from "vue-router";
import { useDeCoffeeStore } from "@/stores/menu";
import { onMounted } from "vue";

const router = useRouter();
const { deCoffee } = defineProps(["deCoffee"]);

function detailView(id) {
    router.push(`/deCoffee/${id}`);
}

const deCoffeeStore = useDeCoffeeStore();

onMounted(() => {
    deCoffeeStore.deCoffeeHandler();
})
</script>

<template>
    <main>
        <div v-for="deCoffee in deCoffeeStore.deCoffees" class="listBox">
            <div :key="deCoffee.id" :deCoffee="deCoffee" @click="detailView(deCoffee.id)" class="itemBox">
                <div> {{ deCoffee.name }}</div>
                <div> 가격 {{ deCoffee.price }}</div>
                <img :src="deCoffee.img" class="itemImage" />
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