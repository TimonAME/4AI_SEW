<template>
    <div>
      <button 
      @click="createPost" 
      class="bg-blue-500 hover:bg-blue-600 text-white text-left w-1/3 py-2 px-4 rounded
      border">
        Create Post
      </button>
    </div>
</template>

<script>
export default {
  methods: {
    createPost() {
      const post = {
        title: "New Post",
        content: "Lorem ipsum...",
        timestamp: new Date().toLocaleString(),
      };
      this.$emit("post-created", post);
    },
  },
};
</script>