<script setup>
    import {useRouter} from 'vue-router';

    const router = useRouter();
</script>

<template>
    <h1>숨겨진 화면</h1>
    <button @click="()=>router.go(-1)">뒤로가기</button>
    <!-- (-1) 가지고 있는 공간중에 몇 번째로 돌아갈건지? -->

</template>