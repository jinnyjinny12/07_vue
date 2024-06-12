import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useReMenuStore = defineStore("reMenu",()=>{
    const router = useRouter();
    const reMenus = ref([{}]);
    const detailsReMenu = reactive({});

    const reMenuHandler = ()=>{   // 조회용
        fetch(import.meta.env.VITE_API_URL + "/reMenu")
        .then(response => response.json())
        .then(data => reMenus.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/reMenu/"+id)
        .then(response => response.json())
        .then(data => detailsReMenu.value = {...data});  // 깊은복사를 할 수 있게 하는 문법
    }

    return{reMenus, detailsReMenu, reMenuHandler, detailsHandler}
})

export const useCoffeeStore = defineStore("coffee",()=>{
    const router = useRouter();
    const coffees = ref([{}]);
    const detailsCoffee = reactive({});

    const coffeeHandler = ()=>{
        fetch(import.meta.env.VITE_API_URL + "/coffee")
        .then(response => response.json())
        .then(data => coffees.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/coffee/"+id)
        .then(response => response.json())
        .then(data => detailsCoffee.value = {...data});
    }
    
    return{coffees, detailsCoffee, coffeeHandler, detailsHandler}
})

export const useDeCoffeeStore = defineStore("deCoffee",()=>{
    const router = useRouter();
    const deCoffees = ref([{}]);
    const detailsDeCoffee = reactive({});

    const deCoffeeHandler = ()=>{
        fetch(import.meta.env.VITE_API_URL + "/deCoffee")
        .then(response => response.json())
        .then(data => deCoffees.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/deCoffee/"+id)
        .then(response => response.json())
        .then(data => detailsDeCoffee.value = {...data});
    }
    
    return{deCoffees, detailsDeCoffee, deCoffeeHandler, detailsHandler}
})

export const useSmoothieStore = defineStore("smoothie",()=>{
    const router = useRouter();
    const smoothies = ref([{}]);
    const detailsSmoothie = reactive({});

    const smoothieHandler = ()=>{
        fetch(import.meta.env.VITE_API_URL + "/smoothie")
        .then(response => response.json())
        .then(data => smoothies.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/smoothie/"+id)
        .then(response => response.json())
        .then(data =>detailsSmoothie.value = {...data});
    }
    
    return{smoothies, detailsSmoothie, smoothieHandler, detailsHandler}
})

export const useTeaAdeStore = defineStore("teaAde",()=>{
    const router = useRouter();
    const teaAdes = ref([{}]);
    const detailsTeaAde = reactive({});

    const teaAdeHandler = ()=>{
        fetch(import.meta.env.VITE_API_URL + "/teaAde")
        .then(response => response.json())
        .then(data => teaAdes.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/teaAde/"+id)
        .then(response => response.json())
        .then(data => detailsTeaAde.value = {...data});
    }
    
    return{teaAdes, detailsTeaAde, teaAdeHandler, detailsHandler}
})

export const useDessertStore = defineStore("dessert",()=>{
    const router = useRouter();
    const desserts = ref([{}]);
    const detailsDessert = reactive({});

    const dessertHandler = ()=>{
        fetch(import.meta.env.VITE_API_URL + "/dessert")
        .then(response => response.json())
        .then(data => desserts.value = data);
    }

    const detailsHandler = (id) =>{
        fetch(import.meta.env.VITE_API_URL + "/dessert/"+id)
        .then(response => response.json())
        .then(data => detailsDessert.value = {...data});
    }
    
    return{desserts, detailsDessert, dessertHandler, detailsHandler}
})