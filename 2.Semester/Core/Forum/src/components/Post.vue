<template>
<div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl "><!--horizantil margin is just for display-->
   <div class="flex items-start px-4 py-6">
      <div class="">
         <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{ post.title }}</h2>
            <small class="text-sm text-gray-700">{{ post.timestamp }}</small><!--22h ago-->
         </div>
         <p class="mt-3 text-gray-700 text-sm">{{ post.content }}</p>
      </div>
   </div>
</div>
</template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
  };
  </script>
  

  