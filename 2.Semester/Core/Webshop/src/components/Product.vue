<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: Object
})

const emit = defineEmits(["delete", "edit"])
</script>

<template>
  <!-- https://tailwindcomponents.com/component/post-card-course-online -->
  <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <h3 class="mb-3 text-xl font-bold text-indigo-600">{{ product.title }}</h3>
    <div class="relative">
      <img class="w-full rounded-xl" :src="product.image" alt="Product Image" />
      <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{{ product.price }} €</p>
    </div>
    <p class="mt-4">{{ product.content }}</p>
    <div class="flex justify-between">
      <button class="mt-4 mb-3 px-6 text-xl text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Product</button>
      <div>
        <!-- Button for deleting a product    -->
        <button class="mt-4 mb-3 mr-1 px-2 text-xl text-white bg-red-600 py-2 rounded-xl shadow-lg" @click="$emit('delete', product.id)">Delete</button>
        <!-- Button for editing a product      -->
        <button class="mt-4 mb-3 px-2 text-xl text-white bg-green-600 py-2 rounded-xl shadow-lg" @click="$emit('edit', product.id)">Edit</button>
      </div>
    </div>
  </div>
</template>