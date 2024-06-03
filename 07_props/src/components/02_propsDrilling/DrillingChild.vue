<script setup>
    import {inject, ref} from 'vue';
    import Grandson from "./DrillingGrandson.vue";

    const propsCount = inject("count");

    // 밑에 있는 건 안써도 된다
    // updated(){
    //     console.log("child~~~update");
    // }
</script>

<template>
    <h2>child: {{ propsCount }}</h2>
    <Grandson />

</template>