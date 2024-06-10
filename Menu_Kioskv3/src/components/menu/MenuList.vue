<script setup>
import { ref, computed, reactive } from "vue";
import { scholar } from "../menu/MenuData.js";

// 전체 메뉴 데이터
const MenuData = reactive(scholar);

// 현재 페이지 상태
const currentPage = ref(1);
// 페이지당 아이템 수
const itemsPage = 9;
// 전체 페이지 수 계산
const totalPages = computed(() => Math.ceil(MenuData.length / itemsPage));
// 현재 페이지의 메뉴 데이터
const paginatedMenuData = computed(() => {
  const start = (currentPage.value - 1) * itemsPage;
  const end = start + itemsPage;
  return MenuData.slice(start, end);
});
// 페이지를 변경하는 함수
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

</script>

<template>
  <div class="MenuList">
    <div v-for="item in paginatedMenuData" :key="item.id" class="menu-card">
      <p>{{ item.name }}</p>
      <img class="image" :src="item.img" :alt="item.name" />
      <p>{{ item.introduction }}</p>
    </div>
    <div class="pagination">
      <button @click="changePage(currentPage.value - 1)" :disabled="currentPage.value === 1">Previous</button>
      <span>Page {{ currentPage.value }} of {{ totalPages }}</span>
      <button @click="changePage(currentPage.value + 1)" :disabled="currentPage.value === totalPages.value">Next</button>
    </div>
  </div>
</template>

<style scoped>
.MenuList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

/* .menu-item {
  margin: 10px;
  text-align: center;
} */

.image {
  width: 100px;
  height: 200px;
}

.menu-card {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 400px;  
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
}

button {
  margin: 0 10px;
}
</style>