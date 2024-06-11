import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useCartStore = defineStore('cart', () =>{
    const cartItems = ref([]);
    const addToCart = (item) => {
        cartItems.value.push(item);
    };

    return { cartItems, addToCart };

});