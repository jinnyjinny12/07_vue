<script setup>

    import { reactive } from 'vue';
    import NameChild from "./NamedChild.vue";

    const obj = reactive({
        name: "vue",
        founder: "Evan you",
        img: "https://images.ctfassets.net/s5uo95nf6njh/2fEr6ctL9FxPtOPhUcM4FA/773007e573bfa16aebdb736f767b45fa/evan-you-hero.jpg"

    });

</script>

<template>
    <div class="container">
        <h1>NamedSlot</h1>
        <NameChild>
            <template v-slot:name>
                <h2>
                    name:{{ obj.name }}
                </h2>

            </template>

            <template #founder>
            <!-- #은 v-slot: 의 축약표현이다. -->
                <P>founder:{{ obj.founder }}</P>        
                <!-- founder:Evan you -->
            </template>

            <template #img>
                <img :src="obj.img" alt="img" />
                
            </template>

        </NameChild>
    </div>

</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
    }

    img{
        width: 200px;
        height: 200px;
    }

</style>