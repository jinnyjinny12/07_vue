<script setup>
import { useRoute } from 'vue-router';
//  vue 훅으로 현재 경로에 대한 정보를 가져옴

import { useBlogStore } from '@/stores/blog'
// useBlogStore 블로그와 관련된 상태관리를 위한 스토어를 가져오는 훅. 

import { watchEffect, ref, inject, onMounted } from 'vue';

import { useCartStore } from '@/stores/cartStore';
import Shoppingcart from '@/components/Shoppingcart.vue';


const route = useRoute();
const blogStore = useBlogStore();
const cartStore = useCartStore();
const modify = ref(true);
const propsCount = inject("count");
// const propsCount = ref(0); // 초기 갯수를 1로 설정


watchEffect(() => {
    blogStore.detailsHandler(route.params.id);
});
//  watchEffect 는 내부 콜백함수들이 반응형으로 참조되는 값들이 변경될 때마다 호출
//  현재 경로의 id 파라미터를 사용해 route.params.id 가 변경될 때마다 함수가 호출됨


onMounted(() => {
    propsCount.value= 0;
})

const handler = () => {
    blogStore.modifyHandler({id : route.params.id, ...blogStore.detailsBlog.value })
}

// handler 라는 블로그를 수정하는 함수이다
// {id : route.params.id, ...blogStore.detailsBlog.value } 현재 경로의 id 와 블로그의 상세정보를 포함한
// 객체를 생성하여 modifyHandler 함수에 전달 


const deleteMethod = () =>{
    blogStore.deleteHandler(route.params.id);
}
// 블로그를 삭제하는 함수

const addToCart = () => { 
    const item = {
        name: blogStore.detailsBlog.value?.name,
        price: blogStore.detailsBlog.value?.price,
        quantity: propsCount.value,
    };
    cartStore.addToCart(item);
}

// 쇼핑카트를 추가하는 함수


</script>

<template>
    <div class="blogContainer">
        <div class="titleContainer">
            <h1 class="title" v-if="modify"> {{ blogStore.detailsBlog.value?.title }}</h1>
            <input v-else v-model="blogStore.detailsBlog.value.title"/>
            <!-- modify 변수가 true 일 때 블로그 제목을 텍스트로 표시
            {{ blogStore.detailsBlog.value?.title }} 블로그 제목을 표시하며 
            false 일 때는 제목을 수정할 수 있는 입력 필드 표시
            **? 연산자를 사용해서 detailsbLOG 가 NULL 또는 undefined 일 때 에러를 방지 -->
            

            <div v-if="modify">
                <button @click="() => modify = false">수정</button>
                <button @click="deleteMethod">삭제</button>
            </div>
            <div v-else>
                <button @click="handler">완료</button>
                <button @click="() => modify = true">취소</button>
            </div>
        </div>

        <div class="contentContainer" v-if="modify">
            <!-- modify 변수가 true 일 때 아래 내용들을 표시한다 -->
            <div class="content">
                {{ blogStore.detailsBlog.value?.content }}
                <!-- 블로그의 콘텐츠를 표시한다  -->
            </div>
            <div>
                <div> 메뉴명: {{ blogStore.detailsBlog.value?.name }}</div>
                <div> 가격 : {{ blogStore.detailsBlog.value?.price }}</div>
                <img class="imgBox" :src="blogStore.detailsBlog.value?.img" :alt="blogStore.detailsBlog.value?.title" />
            </div>
            
            <!-- 갯수를 전달했던 quantity 함수 -->
            <!-- <div class="quantity">
                <button @click="propsCount--">-</button>
                {{ propsCount }}
                <button @click="propsCount++">+</button>            
            </div> -->

              <!-- 기존 template 코드 내에서 '담기' 버튼 부분 수정 -->
             <div class="quantity">
                
                 <button @click="propsCount--" :disabled="propsCount.value <= 0">-</button>
                 {{ propsCount }}
                 <button @click="propsCount++">+</button>  

                 <Shoppingcart :count="propsCount.value" />
                           
            </div>


            <button @click="addToCart">담기</button>
            <button class="cancel-botton" @click="$router.push('/')">취소</button>


        </div>




        <div class="content" v-else>
            <div>
                <textarea v-model="blogStore.detailsBlog.value.content" ></textarea>
            </div>
            <div class="imgContainer">
                <div>
                    <label> 이미지 url : </label>
                    <input class="imgInput" v-model="blogStore.detailsBlog.value.img" />
                </div>
                <img class="imgBox" :src="blogStore.detailsBlog.value.img" :alt="blogStore.detailsBlog.value.title" />
            </div>
        </div>

    </div>
</template>

<style scoped>
.blogContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 700px;
    border: 1px solid;
    margin-left: auto;
    margin-right: auto;

}

.titleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.title {
    width: 40%;

    text-align: center;
    border-bottom: 1px solid;
}

.contentContainer {
    text-align: center;
    width: 70%;
}

.content {

    text-align: left;
    margin-bottom: 2%;
    border: 1px;
}

textarea {
    width: 100%;
    height: 200px;
}

.imgInput {
    width: 65%;
}

.imgBox {
    width: 300px;
    height: 300px;
}

.imgContainer {
    display: flex;
    flex-direction: column;
}
</style>