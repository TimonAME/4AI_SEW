<!-- Customizable Info Screen with close button-->
<template>
  <Transition name="modal-outer">
    <div
        v-show="modalActive"
        class="fixed z-30 w-full bg-black bg-opacity-30 h-full
            top-0 left-0 flex justify-center px-8
            shadow-2xl"
    >
      <Transition name="modal-inner">
        <div
            v-if="modalActive"
            class="p-4  self-start mt-32 max-w-screen-md "
            @click.stop>
            <div class="max-w-md bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
              <div class="heading text-center font-bold text-2xl text-gray-800 mb-5">New Post</div>

              <div class="editor">
                <input class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" v-model="title" spellcheck="false" placeholder="Title" type="text">
                <input class="image-link bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" v-model="image" spellcheck="false" placeholder="Image Link" type="text">
                <input class="price bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" v-model="price" spellcheck="false" placeholder="Price" type="number">
                <textarea class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" v-model="description" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
              </div>

              <!-- icons -->
              <div class="icons flex text-gray-500 m-2">
                <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
              </div>
              <!-- buttons -->
              <div class="buttons flex">
                <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto" @click="$emit('close-modal')">Cancel</div>
                <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" @click="postProduct">Post</div>
              </div>
            </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { ref } from 'vue'

defineProps (
    {
      modalActive: {
        type: Boolean,
        default: false
      },
      currentProduct: {
        type: Object,
        default: {}
      }
    }
)
const emit = defineEmits(["close-modal", "post"])

const title = ref('')
const image = ref('')
const price = ref('')
const description = ref('')

//TODO: when current product is not empty, fill the inputs with the current product's values

const postProduct = () => {
  //if (!title.value || !image.value || !price.value || !description.value) return alert('Please fill all fields')
  if (!title.value) title.value = 'No Title'
  if (!image.value) image.value = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
  if (!price.value) price.value = 0
  if (!description.value) description.value = 'No Description'

  //close modal emit
  emit('close-modal');

  emit('post', { title: title.value, image: image.value, price: price.value, content: description.value, id: Math.random() })

  title.value = ''
  image.value = ''
  price.value = ''
  description.value = ''
}
</script>

<style scoped>
/* scoped to only affect this component */
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s ease;
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}
.modal-inner-enter-active,
.modal-inner-leave-active {
  transition: transform 0.3s ease;
}
.modal-inner-enter-from,
.modal-inner-leave-to {
  transform: translateY(-20px);
}
</style>