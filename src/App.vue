<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <app-save-map></app-save-map>
      <app-reset-button></app-reset-button>
    </v-toolbar>

    <div id="app">
      <app-leaflet-map></app-leaflet-map>
    </div>

    <v-footer :fixed="fixed" app>
      <span>Something Here</span>
    </v-footer>
  </v-app>
</template>

<script>
  import LeafletMap from './components/LeafletMap.vue';
  import ResetButton from './components/ResetButton.vue';
  import SaveMap from './components/SaveMap.vue';

  console.log("In App.vue.script");
  export default {
    components: {
      appLeafletMap: LeafletMap,
      appResetButton: ResetButton,
      appSaveMap: SaveMap
    },
    data() {
      return {
        clipped: false,
        fixed: false,
        title: 'Map Prototype'
      }
    }
  }
  console.log("Leaving App.vue.script");
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }
</style>
