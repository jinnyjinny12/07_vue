<script setup>

    import MenuList2 from "./MenuList2.vue";
    import { useBlogStore } from "../../stores/Cafe";
    import {onMounted, provide} from "vue";


const BlogStore = useBlogStore();

onMounted(()=>{
    BlogStore.blogHandler();
})
</script>

<template>
    <div>
        <div v-for ="blog in BlogStore.blogs" class="listBox">
            <MenuList2 :key="blog.id" :blog="blog"></MenuList2>
        
        </div>
    </div>

</template>

<style scoped>

.listBox{
    width: 70%;
}

</style>