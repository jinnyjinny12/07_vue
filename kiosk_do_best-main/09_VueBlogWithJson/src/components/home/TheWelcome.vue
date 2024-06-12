<script setup>
import ReMenuItem from './ReMenuItem.vue';
import { useReMenuStore } from "../../stores/menu"
import { onMounted } from "vue";

const reMenuStore = useReMenuStore();

onMounted(()=>{
    reMenuStore.reMenuHandler();
})
</script>

<template>
    <div v-for="reMenu in reMenuStore.reMenus" class="listBox">
        <ReMenuItem :key="reMenu.id" :reMenu="reMenu"></ReMenuItem>
    </div>
</template>

<style scoped>
.listBox{
    width: 70%;
}
</style>