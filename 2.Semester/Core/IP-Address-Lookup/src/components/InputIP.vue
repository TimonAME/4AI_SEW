<template>
    <div>
        <!-- input field with var for the given value -->
        <input type="text" v-model="ip" placeholder="IP Address" />
        <button @click="search" >Search</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';


// variable for the ip address
const ip = ref("");

// event when button is clicked
const search = () => {
    console.log("searching for ip address: " + ip.value);
    //regex for ip address
    //regex means: 4 times a number between 0 and 255 followed by a dot or the end of the string
    //the ^ means that the string has to start with the given regex
    const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}$/;
    //check if input is valid
    if (!regex.test(ip.value)) {
        alert("Invalid IP Address");
        return;
    }

    // Emit event to parent with ip address from input field
    const emit = defineEmits(['searchIP'])
    emit('searchIP', ip.value); 

    //reset input field
    ip.value = "";
}

//when enter is pressed, search for ip address
window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        search();
    }
});

</script>

<style lang="scss" scoped>

</style>