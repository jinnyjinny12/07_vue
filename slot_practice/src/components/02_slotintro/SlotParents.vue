<script setup>
    import {ref} from 'vue';
    import Child from "./SlotChild.vue";

    const props = ref("hello data");

</script>

<template>
    <div class="parentsContainer">
        <h1>Parents</h1>

        <Child>
            {{ props }}
        </Child>

    </div>
</template>

<style scoped>
    .parentsContainer{

        display: flex;
        align-items: center;
        flex-direction: column;
        border: 1px solid;
    }

</style>