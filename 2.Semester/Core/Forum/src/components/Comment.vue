<script setup>
import { defineProps } from 'vue';
import Comment from "@/components/Comment.vue";
import { ref } from 'vue';


</script>

<template>
  <!-- Indentation for Comment Section -->
  <div class="ml-8"> <!-- Adjust the ml value for desired indentation -->
    <div class="shadow-lg rounded-lg mr-0 ml-4 md:mx-auto my-4 max-w-md md:max-w-2xl" >
      <div class="px-4 py-6">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1">Commentar</h2>
          <small class="text-sm text-gray-700">5m ago</small>
        </div>
        <div class="flex items-center justify-between">
          <p class="mt-3 text-gray-700 text-sm max-w-md break-words">Super Commentar!!!</p>
          <button class="bg-blue-300 hover:bg-blue-400 text-white text-left  py-2 px-4 rounded border"> Create Comment</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>