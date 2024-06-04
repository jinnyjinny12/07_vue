<script setup>
    import {onMounted, ref, watch} from 'vue';
    import {useRouter} from 'vue-router';
    // url 리소스를 가져올 수 있게 만들어주는 객체이다

    const route = useRouter();

    onMounted(()=>{
        console.log(router.params);
    })

  
</script>

<template>
    <h1>pathVariable: {{ $route.params.id }}</h1>

</template>