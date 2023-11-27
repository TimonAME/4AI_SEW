<template>
  <div>
    <!-- InputIP with search event -->
    <InputIP @searchIP="search" />
  </div>
</template>

<script setup>
import InputIP from "./components/InputIP.vue";

// event when search is clicked
const search = (ip) => {
  console.log("processing ip address: " + ip);

};
</script>

<style lang="scss" scoped>

</style>