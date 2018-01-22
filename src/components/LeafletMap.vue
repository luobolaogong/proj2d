<template>
  <!--<div class="leafletmap">-->
    <div id="mapid" style="height: 700px;"></div>
  <!--</div>-->
</template>

<script>
  console.log("In LeafletMap.vue.script");
  import Vuex from 'vuex';

  export default {
    name: "leaflet-map",
    theMap: null,

    mounted() {
      console.log("In LeafletMap.vue script portion, mounted().");
      this.theMap = L.map('mapid', {
        preferCanvas: true
      });
      console.log("We MUST set theMap, which I guess should be in the Store, but I don't know how.");
      console.log("this.$store: " + this.$store);
      console.log("this.$store.state: " + this.$store.state);
      console.log("this.store: " + this.store);

      this.$store.state.theMap = this.theMap;

      this.theMap.setView([51.5033, -0.1195], 14);
      var layer = L.tileLayer(// 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
      layer.addTo(this.theMap);

      var canvasRendererForGeometries = L.canvas({
        padding: 0.5
      });
      // // Greenwich, Royal Observatory 51.4769, -0.0005
      var marker = L.marker([51.4769, -0.0005], {
        renderer: canvasRendererForGeometries
      });
      marker.bindPopup("I am a marker popup.");
      marker.addTo(this.theMap);
      //Big Ben: 51.5007N   0.1246W
      var circle = L.circle([51.5007, -0.1246], {
        renderer: canvasRendererForGeometries,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
      });
      circle.bindPopup("I am a circle.");
      circle.addTo(this.theMap);
      //console.log("Leaving creation of map inside LeafletMap.vue script, mounted()");
      //this.reset(); // just for testing
      //this.saveMap(); // just for testing
      console.log("Leaving LeafletMap.vue script portion, mounted().");
    },
    methods: {
      // resetMap() {
      //   alert("In LeafletMap.vue.resetMap()");
      //   console.log("In LeafletMapComponent.vue reset()!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Ever????");
      //   this.theMap.setView([51.5007, -0.1246], 11);
      //   console.log("In LeafletMap.vue reset()");
      // },
      // saveMap() {
      //   alert("In LeafletMap.vue saveMap()");
      //   // this next line is the call into the plugin code that eats up all the tiles images in the view
      //   // associated with a canvas, and gets them ready to write/save to an image.
      //   var theMap = this.theMap;
      //   leafletImage(this.theMap, function (err, canvas) {
      //     console.log("LeafletMap.saveMap callback in leafletImage");
      //     // Here's the callback code that leafletImage eventually calls when it's got the image.
      //     // First prepare a name for the file, and then causes it to be "downloaded" to the user's file system.
      //     var date = new Date();
      //     var dateFormatted = date.getFullYear()
      //       + '-' + (date.getMonth() + 1)
      //       + '-' + date.getDate()
      //       + '-' + date.getHours()
      //       + '-' + date.getMinutes()
      //       + '-' + date.getSeconds();
      //
      //     // Get the map image from 'canvas' and slap it into the page
      //     var img = document.createElement('img');
      //     var dimensions = theMap.getSize();
      //     img.width = dimensions.x;
      //     img.height = dimensions.y;
      //     img.src = canvas.toDataURL(); // This becomes a really long base64 string of encoded bits
      //     //window.location.href = img.src.replace('image/png', 'image/octet-stream');
      //     var link = document.createElement("a");
      //     link.setAttribute("href", img.src);
      //     link.setAttribute("download", "mapimage" + dateFormatted);  // saves as a png file
      //     link.click();
      //     console.log("Leaving LeafletMap.saveMap callback in leafletImage");
      //   });
      //   console.log("Leaving LeafletMap.vue.saveMap()");
      // }
    }
  }
  console.log("Leaving LeafletMap.vue script");
</script>

<style scoped>

</style>
