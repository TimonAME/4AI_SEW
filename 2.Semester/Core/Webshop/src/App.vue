<template>
<!-- Gradient Background -->
<div class="w-full bg-gradient-to-r from-emerald-400 to-cyan-400">
  <h1 class="text-5xl text-center font-bold text-white pt-20">Webshop</h1>
  <div class="grid grid-cols-4 gap-4 p-10">
    <Product v-for="product in products" :key="product.title" :product="product" />
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Product from './components/Product.vue';

// List of products with their properties
const products = ref([
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
  ]);

</script>