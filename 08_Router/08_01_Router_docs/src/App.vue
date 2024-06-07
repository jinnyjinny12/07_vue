<script setup>
    import { ref, computed } from 'vue';
    import Home from './views/components/Home.vue';
    import About from './views/components/About.vue';
    import Notfound from './views/components/Notfound.vue';

    const routes = {
        '/':Home,
        '/about':About
    }

    // 1. HOME 과 ABOUT을 루트 변수로 생성한다.
    // 2. currentPath를 반응성 편수로 생성한다
    // 
    
    //윈도의 현재 라우트를 탐색하는 과정 
    const currentPath = ref(window.location.hash);
    //3. 현재웹페이지 주소에서 반응성 변수를 만들어 current path 에 저장한다.
    // currentpath라는 상수를 만든다
    // window.location.hash 는 주소뒤에 # 을 붙이는 것을 말한다
    // 샵 뒤에 오는 글자를 반응성변수로 만들어서 이를 감지해줘.


    // 브라우저 주소창에 #해시 부분 변경을 감지하고 이벤트가 발생했을 때 실행할 콜백 함수를 등록하는 리스너
    // addEventlistener : 이벤트를 등록함
    // hashchange: # <- 부분의 변경을 감지함
    //() => {} : 실행할 콜백 함수를 등록하는 리스너
    // hashchange 는 함수가 아니고 이벤트야! 

    
    window.addEventListener("hashchange", ()=>{
        currentPath.value = window.location.hash;
    });
    
    // 4.window.addEventListener 라는 함수를 만든다. 이함수의 역할은 ashchange 
    // 이벤트를 감지해서 currentPath.value 의 값을 window.location.has를 업데이트해주는 거다
    // window.addEventListener라는 함수는 "hashchange" 라는 이벤트를 등록하고 이를 감지해서
    //  {currentPath.value=window.location.hash}를 실행한다. 실행될때마다 window.location.hash를 담게 되는거?



    // routes에 KEY를 기반으로 컴포넌트를 리턴하여 화면에 랜더링하기 위한 목적
    const currentView = computed(()=>{
        return routes[currentPath.value.slice(1) ||'/'] || Notfound
    })
    // currentPath.value.slice(1) 이 변수는 현재 페이지의 해시값을 보유
    // currentPath.value.slice 에서 얻은 결과가 거짓이거나 비어있을 경우 빈 문자열 대신 '/'를 사용.
    // 만약 현재 페이지의 해시값에 해당하는 라우트가 없다면 NOT FOUND 컴포넌트를 사용.
    // computed 속성은 종속성에 따라 자동으로 업데이트되는 데이터를 계산한다.
    // 현재의 해시값이 비어있거나 (`''`) 라우트에 해당하는 것이 없다면 기본적으로 '/' 경로에 해당하는
    // 컴포넌트를 사용.

</script>

<!--
    routing 
    서버 라우팅은 클라이언트에서 요청한 url 리소스에 따라 서버에서 어떤 작업을 수행할지 결정하는 것을 의미한다
    서버 라우팅 방식은 새로운 페이지 요청을 서버로 전달하면 서버측에서 html을 응답하고 응답받은 html 을
    다시 브라우저에 로드하는 과정이다.

    그러나 spa(sing=page-apllication )에서는 클라이언트 측 자바 스크립트가 전체 페이지를 로드하지 않고
    일부분만 동적으로 갱신되는 애플리케이션을 의미하며 서버 라우팅 웹 애플리케이션에 새로운 페이지를 로드할 때마다
    전체 페이지를 새로고침해야 했으나, spa는 초기 페이지 로드 이후 페이지를 새로고침하지 않고
    필요한 데이터만 받아 동적으로 페이지 일부분을 업데이트하게 된다. **라이프사이클 중에서 업데이트만 가짐(해당 컴포넌트는 CREATE 됨)
    이러한 SPA의 라우팅은 클라이언트 측, 브라우저에서 수행되며 서버에서는 데이터만 요청하는 방식이다.

    vue 에서 라우팅을 하기 위해서는 vue router 를 설치해야 한다.
    npm install vue-router@next 

    vue의 routing 
    vue는 url 리소스를 설정할 때 url 속성에 #을 추가하여 리소스를 등록하게 되는데
    이는 vue에서 브라우저의 기본 동작을 방지하기 위함으로 만약 #을 추가하지 않으면
    자바스크립트를 사용하여 네비게이션을 제어하게 되며 기존 방
    식대로 서바 라우팅을 처리하게 된다
    이렇게 되면 기존 반응성 변수의 상태를 잃어버리기 때문에 주의가 필요하다

-->

<template>
    <main>
        <ul>
            <caption>router</caption>
            <li><a href="#/">home</a></li>
            <li><a href="#/about">about</a></li>
            <a href="#/non-existent-path">Broken link</a>
            <component :is="currentView"/>
            <!-- component 는 vue.js 에서 동적 컴포넌트를 랜더링하기 위해 사용되는 태그
            is=component 는 현재 페이지에 해당하는 컴포넌트를 동적으로 렌더링하는데 
            currentView 변수가 가리키는 컴포넌트를 렌더링한다  -->

        </ul>

        <hr>
        <ul>
            <caption>non-router</caption>
            <li><a href="/">home</a></li>
            <li><a href="/about">about</a></li>
            <a href="/non-existent-path">Broken link</a>
            <component :is="currentView"/>
        </ul>


    </main>
</template>

<style scoped>

</style>
