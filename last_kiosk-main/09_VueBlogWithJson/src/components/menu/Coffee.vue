<script setup>
import { useRouter } from "vue-router";
import { useCoffeeStore } from "@/stores/menu";
import { onMounted } from "vue";

const router = useRouter();
const { coffee } = defineProps(["coffee"]);

function detailView(id) {
    router.push(`/coffee/${id}`);
}

const coffeeStore = useCoffeeStore();

onMounted(() => {
    coffeeStore.coffeeHandler();
})
</script>

<template>
    <nav>
        <RouterLink to="/reMenu">추천메뉴</RouterLink>
        <RouterLink to="/coffee">커피</RouterLink>
        <RouterLink to="/deCoffee">디카페인</RouterLink>
        <RouterLink to="/smoothie">스무디</RouterLink>
        <RouterLink to="/teaAde">티,에이드</RouterLink>
        <RouterLink to="/dessert">디저트</RouterLink>
        <RouterLink to="/order">주문내역</RouterLink>      
      </nav>
    <main>
        <div v-for="coffee in coffeeStore.coffees" class="listBox">
            <div :key="coffee.id" :coffee="coffee" @click="detailView(coffee.id)" class="itemBox">
                <div> {{ coffee.name }}</div>
                <div> 가격 {{ coffee.price }}</div>
                <img :src="coffee.img" class="itemImage" />
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 80%;
    height: auto;
    margin-top: 1.5%;
    margin-left: auto;
    margin-right: auto;
    border: 1px dotted;
}

.listBox {
    width: 30%;
    height: auto;
}

.itemBox {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 10px;
    width: 80%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

.itemImage {
    width: 50%;
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
a{
  margin-left: 10px;
  font-size: 20px;
}
</style>