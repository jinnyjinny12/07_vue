<script setup>
import { useRoute } from 'vue-router';
import { useReMenuStore, useCoffeeStore, useDeCoffeeStore, useSmoothieStore,  useTeaAdeStore, useDessertStore } from '@/stores/menu'
import { watchEffect, ref } from 'vue';

const route = useRoute();
const reMenuStore = useReMenuStore();
const coffeeStore = useCoffeeStore();
const deCoffeeStore = useDeCoffeeStore();
const smoothieStore = useSmoothieStore();
const teaAdeStore = useTeaAdeStore();
const dessertStore = useDessertStore();

watchEffect(() => {
  reMenuStore.detailsHandler(route.params.id);
});
watchEffect(() => {
  coffeeStore.detailsHandler(route.params.id);
});
watchEffect(() => {
  deCoffeeStore.detailsHandler(route.params.id);
});
watchEffect(() => {
  smoothieStore.detailsHandler(route.params.id);
})
watchEffect(() => {
  teaAdeStore.detailsHandler(route.params.id);
})
watchEffect(() => {
  dessertStore.detailsHandler(route.params.id);
})

</script>

<template>
  <div v-if="route.params.category === 'reMenu'" class="Container">
    <div class="titleContainer">
      <h1 class="title"> {{ reMenuStore.detailsReMenu.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ reMenuStore.detailsReMenu.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="reMenuStore.detailsReMenu.value?.img" :alt="reMenuStore.detailsReMenu.value?.name" />
      </div>
    </div>
    <button class="damgi" @click="">담기</button>   <!--  post category.id   일단 추천메뉴 먼저 장바구니 정보 ㄴjson서버에 담아서 옮기기 -->
    <button class="cancel-button" @click="$router.push('/reMenu')">취소</button>
  </div>

  <div v-if="route.params.category === 'coffee'" class="Container">
    <div class="titleContainer">
      <h1 class="title">{{ coffeeStore.detailsCoffee.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ coffeeStore.detailsCoffee.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="coffeeStore.detailsCoffee.value?.img" :alt="coffeeStore.detailsCoffee?.name" />
      </div>
    </div>
    <button class="cancel-button" @click="$router.push('/coffee')">취소</button>
  </div>

  <div v-if="route.params.category === 'deCoffee'" class="Container">
    <div class="titleContainer">
      <h1 class="title">{{ deCoffeeStore.detailsDeCoffee.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ deCoffeeStore.detailsDeCoffee.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="deCoffeeStore.detailsDeCoffee.value?.img"
          :alt="deCoffeeStore.detailsDeCoffee?.name" />
      </div>
    </div>
    <button class="cancel-button" @click="$router.push('/deCoffee')">취소</button>
  </div>

  <div v-if="route.params.category === 'smoothie'" class="Container">
    <div class="titleContainer">
      <h1 class="title"> {{smoothieStore.detailsSmoothie.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ smoothieStore.detailsSmoothie.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="smoothieStore.detailsSmoothie.value?.img" :alt="smoothieStore.detailsSmoothie.value?.name" />
      </div>
    </div>
    <button class="cancel-button" @click="$router.push('/smoothie')">취소</button>
  </div>

  <div v-if="route.params.category === 'teaAde'" class="Container">
    <div class="titleContainer">
      <h1 class="title"> {{teaAdeStore.detailsTeaAde.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ teaAdeStore.detailsTeaAde.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="teaAdeStore.detailsTeaAde.value?.img" :alt="teaAdeStore.detailsTeaAde.value?.name" />
      </div>
    </div>
    <button class="cancel-button" @click="$router.push('/teaAde')">취소</button>
  </div>

  <div v-if="route.params.category === 'dessert'" class="Container">
    <div class="titleContainer">
      <h1 class="title"> {{dessertStore.detailsDessert.value?.name }}</h1>
    </div>
    <div class="contentContainer">
      <div class="content">
        {{ dessertStore.detailsDessert.value?.price }}
      </div>
      <div>
        <img class="imgBox" :src="dessertStore.detailsDessert.value?.img" :alt="dessertStore.detailsDessert.value?.name" />
      </div>
    </div>
    <button class="cancel-button" @click="$router.push('/dessert')">취소</button>
  </div>

</template>

<style scoped>
.Container {
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