<template>


  <div id="app">
    <div id="nav">
      <router-link to="/">Login</router-link>     
    </div>
    <router-view/>
    
  </div>
</template>

<script>
  export default {
    mounted () {
      navigator.geolocation.getCurrentPosition(function (location) {

        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);
      

        var marker = L.marker(latlng).addTo(mymap);
      })
      // this.$nextTick(() => {
      //   this.$refs.myMap.mapObject.ANY_LEAFLET_MAP_METHOD();
      // })
    }
  }
</script>

<style lang="scss">
body{
    width: 100%;
    background: $color-main;
    overflow-x: hidden;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
