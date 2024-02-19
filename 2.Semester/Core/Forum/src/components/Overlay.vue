<!-- Customizable Info Screen with close button-->
<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
          v-show="modalActive"
          class="fixed w-full bg-black bg-opacity-30 h-full
            top-0 left-0 flex justify-center px-8
            shadow-2xl"
      >
        <Transition name="modal-inner">
          <div
              v-if="modalActive"
              class="p-4 bg-white self-start mt-32 max-w-screen-md rounded-md"
              @click.stop>

            <slot />

            <form v-on:submit.prevent class="flex flex-col">
              <label for="title">Title:</label>
              <input id="title" v-model="post.title" type="text" required class="border" />

              <label for="content">Content:</label>
              <textarea id="content" v-model="post.content" required class="border"></textarea>

              <button @click="$emit('posting')">Create Post</button>
            </form>

            <button
                @click="$emit('close-modal')"
                class="text-black mt-8 py-2 hover:opacity-80 duration-100">
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
//composition API used
defineProps (
    {
      modalActive: {
        type: Boolean,
        default: false
      },
      post: {
        type: Object,
        default: {
          title: '',
          content: '',
          timestamp: ''
        }
      }
    }
)
defineEmits (
    [
      "close-modal",
      "posting"
    ]
)
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
/* transition for the modal */
/* modal inner and outer from name Tag above */
/* enter-from and leave-to from vue transitions */
</style>