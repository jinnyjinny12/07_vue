<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const {blog} = defineProps(["blog"]);

// 이 경우는 defineProps 함수를 통해 props 를 정의하고 객체 디스럭처링을 사용
// blog 라는 props 를 defineProps 함수를 사용해서 정의하고 디스터릭처링을 사용해 
// porps 를 추출 
// 컴포넌트 내부에서 blog 변수를 사용하여 props 를 사용할 수 있음



function detailView(id) {
    router.push(`/blogs/${id}`);
}

</script>

<template>
    <div class="itemBox" @click="detailView(blog.id)">
        <div> {{ blog.name }}</div>
        <div> 가격 {{  blog.price }}</div>
        <img :src="blog.img" class="itemImage" />
        <!-- <button @click="detailView(blog.id)">조회하기</button> -->
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