<script setup>
    import {ref} from 'vue';
    import DynamicChild from "./DynamicChild.vue";

    const dynamicName = ref("");
   

</script>

<!-- 
    목적 : 입력받는 값 위치에 이미지를 노출한다.
    상황 : 
        1) 입력받는 값 위치에 따라서 입력받은 값이 노출됨.
        2) 슬롯이 만들어져 있음
            개념: 슬롯은 콘텐츠를 컴포넌트에 전달함. dynamicChild 의 슬롯이 DynamicParents 에 콘텐츠를 전달함.
      
    1. 이미지 url 이미지를 받아온다.
    2. 이미지를 출력한다.
    3. 입력받는 값 위치에 이미지를 노출한다.

-->

<!--
    목적: 입력한 위치에 따라 입력한 이미지를 입력받는다.
    상황
        1) slot 으로 입력할 위치에 대해 정의해되어 있다(east, west,,)
        2) 가져올 이모지의 주소가 git api링크로 있다.
    
    html
        1. 위치를 입력받을 창을 만든다.
        2. 이모지를 입력받을 창을 만든다.
    
    vue
        1. 이미지와 입력값의 반응형 변수로 생성. 
        2. 입력값이 변하면 변하는 입력값에 따라 맞는 이미지를 불러온다
        3. 입력값이 변하면 이미지의 노출되는 위치가 달라진다.
        4. 이미지의 위치 데이터와 이미지 데이터가 바인딩된다.
        5. 입력된 위치에 입력된 이미지가 출력된다. 

-->


<!--
    css 로 위치그리기

    목적: 입력한 위치에 따라 입력한 이미지를 입력받는다.
    상황
        1) slot 으로 입력할 위치에 대해 정의해되어 있다(east, west,,)
        2) 가져올 이모지의 주소가 git api링크로 있다.
    
    html
        1. 위치를 입력받을 창을 만든다.
        2. 이모지를 입력받을 창을 만든다.
        3. 이모지를 화면에 표시하는 창을 만든다.
   
    vue
        1. 위치를 입력받는 반응성 변수 생성.
        2. 이모지를 입력받는 반응성 변수 생성.
        3. github에서 이모지 객체 받아오기 -> 추가 작성
        4. 이모지 객체에서 입력받은 이모지 반응성 변수에 해당하는 이모지를 저장하는 반응성 변수 생성
        5. 위치반응성 변수에 입력된 위치에 이모지를 전달한다.


// 기존거
        2. 입력값이 변하면 변하는 입력값에 따라 맞는 이미지를 불러온다
        3. 입력값이 변하면 이미지의 노출되는 위치가 달라진다.
        4. 이미지의 위치 데이터와 이미지 데이터가 바인딩된다.
        5. 입력된 위치에 입력된 이미지가 출력된다. 

-->

<template>

    <div>
        <h1>DynamicSlot : </h1>
        <input v-model="dynamicName"/>
        <!-- input v-model 의 이미는 사용자가 입력한 값을 Vue 의 반응형 데이터인 dynamicName에
        바인딩한다. 사용자가 입력한 내용은 'dynamicName' 변수에 자동 반영되고 
        dynamicName 변수값이 변경되면 input 요소도 자동 갱신됨 : 양방향 바인딩 -->


        <DynamicChild>
            <template v-slot:[dynamicName]>
                <!-- 축약에 대한 표현식으로 <template #[dynamicName]> 할 수 있음. -->
                vue.js 는 슬롯기능을 사용해서 동적으로 슬롯이름을 설정한다
                
                Vue 인스턴스의 데이터 중 하나인 dynamicName 을 동적으로



                {{ dynamicName }}
                <img src="https://flexible.img.hani.co.kr/flexible/normal/290/206/imgdb/resize/2010/0712/1278390342_8000500986_20100712.JPG" />
            </template>
        </DynamicChild>
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