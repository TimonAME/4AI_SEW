<template>
    <div class="bg-gray-700 p-4 my-4 rounded">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-400 mb-2">{{ post.timestamp }}</p>
      <p>{{ post.content }}</p>
      <!-- Add any additional post content or extension elements here -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
  };
  </script>
  