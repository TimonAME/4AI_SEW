<template>
<!-- Gradient Background -->
<div class="w-full min-h-screen h-auto bg-gradient-to-r from-emerald-400 to-cyan-400">
  <h1 class="text-5xl text-center font-bold text-white pt-20">Webshop</h1>
  <!-- Create new Product Button -->
  <div class="flex justify-center">
    <button
        class="fixed z-10 top-0 right-0 mt-4 mr-4 text-xl w-1/4 text-white bg-indigo-600 py-2 rounded-xl shadow-lg"
        @click="newProduct()"
    >Create new Product</button>
    <Overlay :modalActive="modalActive" @close-modal="toggleModal" @post="addProduct" :currentProduct="currentProduct" />
  </div>
  <div class="z-20 grid grid-cols-4 gap-4 p-10">
    <Product v-for="product in products" :key="product.id" :product="product" @delete="deleteProduct" @edit="editProduct" />
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Product from './components/Product.vue';
import Overlay from './components/Overlay.vue';

// List of products with their properties
const products = ref([/*
  {
    title: 'Javascript Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'React Bootcamp for Absolute Beginners',
    price: 14,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Vue Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Angular Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Javascript Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'React Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Vue Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  },
  {
    title: 'Angular Bootcamp for Absolute Beginners',
    price: 0,
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  }
  */
  ]);

// Create new Product
const newProduct = () => {
  toggleModal();
}

const deleteProduct = (id) => {
  products.value = products.value.filter(product => product.id !== id)
}

const currentProduct = ref(null)

const editProduct = (id) => {
  currentProduct.value = products.value.find(product => product.id === id)
  toggleModal()
}

const addProduct = (product) => {
  products.value.push(product)
}
const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
  // toggle between true and false
  // .value to get the value of the ref
}
</script>