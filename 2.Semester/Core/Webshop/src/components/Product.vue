<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: Object
})
</script>

<template>
  <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <h3 class="mb-3 text-xl font-bold text-indigo-600">{{ product.title }}</h3>
    <div class="relative">
      <img class="w-full rounded-xl" :src="product.image" alt="Product Image" />
      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{{ product.price }} €</p>
    </div>
    <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{{ product.title }}</h1>
    <p>{{ product.content }}</p>
    <button class="mt-4 mb-3 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
  </div>
</template>