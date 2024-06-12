<script setup>
import { useRouter } from "vue-router";
import { useTeaAdeStore } from "@/stores/menu";
import { onMounted } from "vue";

const router = useRouter();
const { teaAde } = defineProps(["teaAde"]);

function detailView(id) {
    router.push(`/teaAde/${id}`);
}

const teaAdeStore = useTeaAdeStore();

onMounted(() => {
    teaAdeStore.teaAdeHandler();
})
</script>

<template>
    <main>
        <div v-for="teaAde in teaAdeStore.teaAdes" class="listBox">
            <div :key="teaAde.id" :teaAde="teaAde" @click="detailView(teaAde.id)" class="itemBox">
                <div> {{ teaAde.name }}</div>
                <div> 가격 {{ teaAde.price }}</div>
                <img :src="teaAde.img" class="itemImage" />
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