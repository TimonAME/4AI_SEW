<template>
    <div>
      <button 
      @click="toggleModal"
      class="bg-blue-500 hover:bg-blue-600 text-white text-left w-1/3 py-2 px-4 rounded
      border">
        Create Post
      </button> <!--@click="createPost"-->
    </div>
    
    
    <!--<BaseModal :modalActive="modalActive" @close-modal="toggleModal">-->
      <!--
        <form @submit.prevent="createPost">
          <label for="title">Title:</label>
          <input id="title" v-model="post.title" type="text" required />

          <label for="content">Content:</label>
          <textarea id="content" v-model="post.content" required></textarea>

          <button type="submit">Create Post</button>
        </form>
      -->
      <!--</BaseModal>-->
      <BaseModal :modalActive="modalActive" @close-modal="toggleModal" @posting="createPost"/>
</template>

<script setup>
import BaseModal from './BaseModal.vue';
import {ref} from 'vue'
const emit = defineEmits(['inFocus', 'submit']);

function createPost() {
  post.timestamp = new Date().toLocaleString();
  emit("post-created", post);
  post.title = '';
  post.content = '';
}

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
    // toggle between true and false
    // .value to get the value of the ref
}
</script>