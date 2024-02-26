<template>
  <div class="ml-8">
    <div class="shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-md md:max-w-2xl "><!--horizantil margin is just for display-->
      <div class="px-4 py-6">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-semibold text-gray-900 -mt-1">{{ post.title }}</h2>
          <small class="text-sm text-gray-700">{{ displayedData }}</small><!--22h ago-->
        </div>
        <div class="flex items-center justify-between">
          <p class="mt-3 text-gray-700 text-sm max-w-md break-words">{{ post.content }}</p>
          <button
              @click="toggleModal"
              class="bg-blue-500 hover:bg-blue-400 text-white text-left  py-2 px-4 rounded border"
          > Create Comment</button>
        </div>
      </div>
    </div>
    <post v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
  <Overlay :modalActive="modalActive" @close-modal="toggleModal" @posting="createPost" :post="comment"/>
</template>
  
<script setup>
import {defineProps} from 'vue';
import { ref } from 'vue';
import Post from "@/components/Post.vue";
import Overlay from "@/components/Overlay.vue";

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

let posts = ref([]);

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
  // toggle between true and false
  // .value to get the value of the ref
}

let comment = {
  title: '',
  content: '',
  timestamp: ''
};
function createPost() {
  toggleModal();
  //comment.title = props.post.title + " - Comment";
  comment.timestamp = new Date();
  posts.value.push(comment);
  comment = {
    title: '',
    content: '',
    timestamp: ''
  }
}

let displayedData = ref("just now");

//displayedTime(props.post.timestamp);
setInterval(displayedTime, 5000, props.post.timestamp);

// Function to format the time
function displayedTime(oldTime) {
  let currentTime = new Date();
  let oldDate = new Date(oldTime);
  let timeDifference = currentTime - oldDate;
  let seconds = timeDifference / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  let weeks = days / 7;
  let months = weeks / 4;
  let years = months / 12;
  if (years >= 1) {
    displayedData.value =  Math.floor(years) + " years ago";
  } else if (months >= 1) {
    displayedData.value =  Math.floor(months) + " months ago";
  } else if (weeks >= 1) {
    displayedData.value =  Math.floor(weeks) + " weeks ago";
  } else if (days >= 1) {
    displayedData.value =  Math.floor(days) + " days ago";
  } else if (hours >= 1) {
    displayedData.value =  Math.floor(hours) + " hours ago";
  } else if (minutes >= 1) {
    displayedData.value =  Math.floor(minutes) + " minutes ago";
  } else {
    displayedData.value =  Math.floor(seconds) + " seconds ago";
  }
}
</script>