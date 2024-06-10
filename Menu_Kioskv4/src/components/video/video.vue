<script setup>
    import {ref} from 'vue';
    const Video = ref('Video');

</script>

<template>
    
        <Video id="app" autoplay muted loop class="video-container">
            <source src="https://videos.pexels.com/video-files/2909914/2909914-hd_1366_720_24fps.mp4">
        </Video>
    
</template>

<style scoped>

.video-container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70%;
    border-radius: 20px;    
}
</style>