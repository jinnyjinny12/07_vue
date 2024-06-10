<!-- 이게 블로그아이템 -->

<script setup>
    import {useRouter} from "vue-router";
    import { defineProps } from 'vue';


    const router = useRouter();
    // const {blog} = define(["blog"]);
   
    const props = defineProps({
        blog:{
            type: Object,
            required: true
        }
    })

    function detailView(id) {
        router.push(`/blogs${id}`);     
    }
</script>

<template>
    <div class="itemBox">
        <label>제목 {{ props.blog.title }}</label>
        <button @click="detailView(props.blog.id)">조회하기</button>
    </div>
</template>


<style scoped>
.itemBox {
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    align-items: center;
    height: 30px;
    margin-bottom: 1%;
}

label {
    margin-left: 1%;
}

button {
    margin-right: 1%;
}
</style>