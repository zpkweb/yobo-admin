

<template>
  <h1 class="red">ip: {{ ip }}!</h1>
</template>

<script>
  export default {
    data() {
      return { ip: 'no' }
    },
    async asyncData({ $axios }) {
      const ip = await $axios.$get('http://icanhazip.com')
      return { ip }
    },
    fetch () {
      // The fetch method is used to fill the store before rendering the page
    },
    head () {
      // Set Meta Tags for this Page
    },
    // and more functionality to discover
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
