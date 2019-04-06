<template>
  <div id="app">    
    <router-view/>    
  </div>
</template>

<script>
  export default {
    mounted () {
      navigator.geolocation.getCurrentPosition(function (location) {

        var latlng = new L.LatLng(location.coords.latitude, location.coords.longitude);   

        
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
    background: white;
    overflow-x: hidden;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
