<!--<template>-->
  <!--<v-app>-->
    <!--<v-toolbar fixed app :clipped-left="clipped">-->
      <!--<v-toolbar-title v-text="title"></v-toolbar-title>-->
      <!--<app-save-map></app-save-map>-->
      <!--<app-reset-button></app-reset-button>-->
      <!--<app-reset-button></app-reset-button>-->
    <!--</v-toolbar>-->

    <!--<div id="app">-->
      <!--<app-leaflet-map></app-leaflet-map>-->
    <!--</div>-->

    <!--<v-footer :fixed="fixed" app>-->
      <!--<span>Something Here</span>-->
    <!--</v-footer>-->
  <!--</v-app>-->
<!--</template>-->



<template>
  <v-app id="inspire">



    <v-navigation-drawer
      fixed
      v-model="drawerRight"
      :stateless="right"
      right
      clipped
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Right Drawer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>Map Prototype</v-toolbar-title>
      <v-spacer></v-spacer>

      <app-reset-button></app-reset-button>
      <app-save-map></app-save-map>

      <v-text-field prepend-icon="search" hide-details single-line></v-text-field>
      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>
      <!--<v-btn icon>-->
        <!--<v-icon>more_vert</v-icon>-->
      <!--</v-btn>-->

      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <!--<div id="app">     works here-->
      <!--<app-leaflet-map></app-leaflet-map>-->
    <!--</div>-->

    <!--<v-navigation-drawer-->
      <!--fixed-->
      <!--v-model="drawer"-->
      <!--:stateless="left"-->
      <!--app-->
    <!--&gt;-->
      <!--<v-list dense>-->
        <!--<v-list-tile @click.stop="left = !left">-->
          <!--<v-list-tile-action>-->
            <!--<v-icon>exit_to_app</v-icon>-->
          <!--</v-list-tile-action>-->
          <!--<v-list-tile-content>-->
            <!--<v-list-tile-title>Left Drawer</v-list-tile-title>-->
          <!--</v-list-tile-content>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-navigation-drawer-->
      <!--temporary-->
      <!--v-model="left"-->
      <!--fixed-->
    <!--&gt;</v-navigation-drawer>-->

    <!--<div id="app">-->
      <!--<app-leaflet-map></app-leaflet-map>-->
    <!--</div>-->
    <!--<app-leaflet-map></app-leaflet-map>-->

    <v-content>
      <app-leaflet-map></app-leaflet-map>
      <!--<v-container fluid fill-height>-->
        <!--<v-layout justify-center align-center>-->


          <!--Put the map here, maybe.-->
          <!--&lt;!&ndash;<app-leaflet-map></app-leaflet-map>&ndash;&gt;-->
          <!--&lt;!&ndash;<v-tooltip right>&ndash;&gt;-->
            <!--&lt;!&ndash;<v-btn icon large :href="source" target="_blank" slot="activator">&ndash;&gt;-->
              <!--&lt;!&ndash;<v-icon large>code</v-icon>&ndash;&gt;-->
            <!--&lt;!&ndash;</v-btn>&ndash;&gt;-->
            <!--&lt;!&ndash;<span>Source</span>&ndash;&gt;-->
          <!--&lt;!&ndash;</v-tooltip>&ndash;&gt;-->


        <!--</v-layout>-->
      <!--</v-container>-->
    </v-content>
    <v-navigation-drawer
      right
      temporary
      v-model="right"
      fixed
    ></v-navigation-drawer>
    <v-footer color="blue-grey" class="white--text" app>
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
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
        title: 'Map Prototype',
        drawer: null,
        drawerRight: false,
        right: null,
        left: null
      }
    },
    props: {
      source: String
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
