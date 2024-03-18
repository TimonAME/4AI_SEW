<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Gallerie</h1>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" :alt="photo.name" class="w-full h-auto">
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const photos = inject('photos');
</script>

<style scoped>
/* Add your styles here */
</style>