<template>
  <div>
    <nav class="bg-blue-500 p-4 flex justify-center gap-4 text-white">
      <router-link to="/components/Gallerie" class="hover:text-gray-300">Gallerie</router-link>
      <router-link to="/components/Photo" class="hover:text-gray-300">Photo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const photos = ref([]);
provide('photos', photos);
</script>

<style lang="scss" scoped>

</style>