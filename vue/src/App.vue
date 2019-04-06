<template>


  <div id="app">
  <l-map id="myMap" ref="myMap">
  <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
  </l-map>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<script>
  export default {
    mounted () {
      navigator.geolocation.getCurrentPosition(function (location) {

        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
        mymap.setView(latlng);

        var marker = L.marker(latlng).addTo(mymap);
      })
      // this.$nextTick(() => {
      //   this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
      // })
    }
  }
</script>

<style lang="scss">
#myMap{
  height:150px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
