<template lang="pug">
  .table
    .tr(v-for="(row, y) in $store.state.field.map" :key="y")
      .td(v-for="(cell, x) in row" :key="x" )
        map-chip(:mapId="cell")
          map-object(v-if="$store.state.field.object[y][x]" :objectId="$store.state.field.object[y][x]" :x="x" :y="y" :key="$store.state.field.object[y][x]" @click.native="$store.dispatch('field/onClick', {x, y})")
</template>

<script>
  import MapChip from '~/components/atoms/MapChip.vue'
  import MapObject from '~/components/atoms/MapObject.vue'

  export default {
    components: {
      MapChip,
      MapObject
    }
  }
</script>

<style scoped>
  .table {
    display: table;
    line-height: 0;
  }

  .tr {
    display: table-row;
  }

  .td {
    display: table-cell;
  }
</style>
