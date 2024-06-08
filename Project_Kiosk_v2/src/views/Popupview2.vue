<script setup>
import {useRouter} from  'vue-router';
// popup 은 즉 HIDEENVIEW 

const router = useRouter();

</script>

<template>
    <h1> 이건 팝업입니다</h1>
    <h2> 바코드를 스캔하세요</h2>
    <button @click="()=>router.go(-1)">결제취소</button>

</template>