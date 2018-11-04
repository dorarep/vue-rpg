<template lang="pug">
  .map-chip(:style="imageStyle")
    slot
</template>

<script>
  const mapChips = {
    0: require('~/assets/img/map/0.png'),
    1: require('~/assets/img/map/1.png'),
    2: require('~/assets/img/map/2.png'),
    3: require('~/assets/img/map/3.png'),
    4: require('~/assets/img/map/4.png'),
    5: require('~/assets/img/map/5.png'),
  }

  export default {
    props: {
      mapId: Number
    },
    computed: {
      imageStyle: function (){
        return {
          width: `${this.$store.state.field.chipSize}px`,
          height: `${this.$store.state.field.chipSize}px`,
          background: `url("${mapChips[this.mapId]}")`,
          'background-repeat': 'no-repeat',
          'background-size': 'cover'
        }
      },
    }
  }
</script>
