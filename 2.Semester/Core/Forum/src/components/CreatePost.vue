<template>
    <div>
      <button 
      @click="toggleModal"
      class="bg-blue-500 hover:bg-blue-600 text-white text-left w-1/3 py-2 px-4 rounded
      border">
        Create Post
      </button> <!--@click="createPost"-->
    </div>
      <Overlay :modalActive="modalActive" @close-modal="toggleModal" @posting="createPost" :post="post"/>
</template>

<script setup>
import BaseModal from './BaseModal.vue';
import {ref} from 'vue'
import Overlay from "@/components/Overlay.vue";
const emit = defineEmits(['inFocus', 'submit']);

let post = {
  title: '',
  content: '',
  timestamp: ''
}

function createPost() {
  toggleModal();
  post.timestamp = new Date();
  emit("post-created", post);
  post = {
    title: '',
    content: '',
    timestamp: ''
  }
}

const modalActive = ref(null);
const toggleModal = () => {
    modalActive.value = !modalActive.value;
    // toggle between true and false
    // .value to get the value of the ref
}
</script>