<template lang="pug">
  smoothly-movable(:uuid="`${objectId}`")
    img(v-if="imgSrc" :src="imgSrc" width="100%" height="100%")
</template>

<script>
  import OBJECTS from '~/constants/objects'
  import SmoothlyMovable from '~/components/atoms/SmoothlyMovable'

  let events = {}
  let intervalEvent = setInterval(() => {
    Object.keys(events).forEach((key) => {
      events[key]()
    })
  }, 1000)

  export default {
    props: {
      objectId: Number,
      x: Number,
      y: Number
    },
    components: {
      SmoothlyMovable
    },
    data () {
      return {
        intervalId: null
      }
    },
    mounted () {
      if (OBJECTS[this.objectId].onInterval) {
        events[this.objectId] = () => {this.$store.dispatch('field/onInterval', { x: this.x, y: this.y }) }
      }
    },
    computed: {
      imageStyle: function () {
        let style = {
          width: `${this.$store.state.field.chipSize}px`,
          height: `${this.$store.state.field.chipSize}px`
        }

        if (OBJECTS[this.objectId].img) {
          style.background = `url("${OBJECTS[this.objectId].img}")`
          style['background-repeat'] = 'no-repeat'
          style['background-size'] = 'contain'
        }
        return style
      },
      imgSrc: function () {
        return OBJECTS[this.objectId].img
      }
    }
  }
</script>

<style scoped>
  .transparent {
    background-color: rgba(0, 0, 0, 0);
  }
</style>
