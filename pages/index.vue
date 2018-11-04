<template lang="pug">
  #container
    map-frame
</template>

<script>
  import MapFrame from '~/components/organisms/MapFrame.vue'

  export default {
    components: {
      MapFrame
    }
  }
</script>

<style>
  #container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-size: cover;
    background-color: black;
  }
</style>
