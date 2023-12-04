<template>
    <div>
        <!-- input field with var for the given value -->
        <input 
          type="text" 
          v-model="searchQuery" 
          @input="getSearchResults"
          placeholder="Enter Domain" />
    </div>
</template>

<script>
// npm install axios

import { ref } from "vue";
import axios from "axios";

const searchResults = ref([]);
const searchQuery = ref("");
const queryTimeout = ref(null);

const getSearchResults = async () => {
  if (searchQuery.value.length > 3) {
    const result = axios.get(
      `http://ip-api.com/json/${searchQuery.value}`
    )
    searchResults.value = result.data;
    console.log(await result.data);
    return;
  }
  searchResults.value = [];
};
</script>

<style lang="scss" scoped>

</style>

<!--
  <button @click="search" >Search</button>


  export default {
  data() {
    return {
      url: '',
    };
  },
  methods: {
    search() {
        console.log("searching for URL: " + this.url);
        //regex for url
        var regex = new RegExp("^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");

        //check if input is valid
        if (!regex.test(this.url)) {
            alert("Invalid URL");
            return;
        }

      // Emit event to parent with ip address from input field
      this.$emit('searchURL', this.url);

      // reset input field
      this.url = '';
    },
  },
};
-->