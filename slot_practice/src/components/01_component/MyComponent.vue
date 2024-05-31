
<script>
    import { onMounted } from "vue"
    // 이게 뭐지? 모르니까 이따 찾아봐야지

    export default{
        setup(){
            onMounted( async () => {
                console.log("hellow vue");
            })
        }
    }

</script>

<template> 
<!-- 사용자에게 보여지는 화면을 template 하위 구성을 둔다 -->
    <h1>hello vue</h1>
    <h2>test</h2>
</template>

<style scoped>

</style>