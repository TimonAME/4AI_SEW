<!-- Customizable Info Screen with close button-->
<template>
    <Teleport to="body">
        <!-- Teleport to body to make the modal work cleaner for no future issues -->
        <Transition name="modal-outer">
            <!-- Transition component from vue; name for custom css below -->
            <div
            v-show="modalActive"
            class="fixed w-full bg-black bg-opacity-30 h-full
            top-0 left-0 flex justify-center px-8 text-fontColor"
            >
            <!--
                @click.self="$emit('close-modal')"

                v-show="modalActive" shows the modal when modalActive is true
                v-show and v-if used to have 2 different animations when opend
                bg-opacity-30 makes the background transparent for background effect
                @click.self="$emit('close-modal')" closes the modal when clicked on the background
            -->
                <Transition name="modal-inner">
                    <div
                    v-if="modalActive"
                    class="p-4 bg-black self-start mt-32 max-w-screen-md rounded-md"
                    @click.stop>
                        <!--
                            v-if="modalActive" shows the modal when modalActive is true
                            white box in middel, size of brakepoint (768px)
                            @click.stop stops the event when clicked on the white inner box
                        -->
                        <slot />
                        <!-- slot to make component reusable and dynamic
                        slot tag will be replaced with what gets passed from parent -->

                        <form @submit.prevent="posting">
                            <label for="title">Title:</label>
                            <input id="title" v-model="post.title" type="text" required />

                            <label for="content">Content:</label>
                            <textarea id="content" v-model="post.content" required></textarea>

                            <button type="submit">Create Post</button>
                        </form>

                        <button
                            @click="$emit('close-modal')"
                            class="text-white mt-8 bg-accent py-2 px-6 hover:opacity-80 duration-100">
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
        }
    }
)
defineEmits (
    [
        "close-modal",
        "posting"
    ]
)

let post = {
    title: '',
    content: '',
}

function posting() {
    emit("posting", post)
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
/* transition for the modal */
/* modal inner and outer from name Tag above */
/* enter-from and leave-to from vue transitions */
</style>