<template>
  <div class="min-h-screen bg-gray-100 text-gray-800 p-4">
    <div class=" fixed top-0 left-0 right-0 bg-slate-200 p-4 shadow-md">
      <create-post @post-created="addPost" />
    </div>
    
    <div class="container mx-auto mt-16">
      <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </div>
  </template>

<script>
import CreatePost from "./components/CreatePost.vue";
import Post from "./components/Post.vue";


export default {
  components: {
    CreatePost,
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style scoped>
/* Add any additional global styles here */
</style>
