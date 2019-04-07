<template>
<div id="map">
</div>

</template>

<script>
export default {
  name: "homePage",
  data() {
    return {
        map:{},
        currPos:[52.237049,21.017532],
        item:{
            markers:[],
        }
    };
  },
  methods: {
      addPointerWithText: function (pos,html)
      {
            var marker = L.marker(pos).addTo(this.map).bindTooltip(html,{direction:"top",permanent:true}).openTooltip();
            this.item.markers.push(marker);
      },
      generateTooltipHtml:function (loc)
      {
          var html =`<div class="card_map"><h6 class="card_map__name">${loc.name}</h6><p><i class="material-icons">event</i> ${loc.eventCount} <i class="material-icons">accessibility</i> ${loc.membersCount} </p> <div class="card_map__event"><p>${loc.currentEvent.name}</p> <p>${loc.currentEvent.dateStart}</p><p>${loc.currentEvent.dateEnd}</p></div></div>`;
            return html;
      }
  },
  mounted() {
    M.AutoInit();
    var mymap = L.map('map',{zoomControl:false}).setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
    }).addTo(mymap);
    this.map=mymap;
    navigator.geolocation.getCurrentPosition((location)=>{

        var cuur = new L.LatLng(location.coords.latitude, location.coords.longitude);
       
        this.addPointerWithText(cuur,this.generateTooltipHtml(
            {name:"Park technologiczny",
             eventCount:10,
             membersCount:4,
             currentEvent:{
                 name:"Hacknarok",
                 dateStart:"06.04 10:00",
                 dateEnd:"07.04 15:00",
             }
             }))
        
         

         var aghCoord = new L.LatLng(50.066858, 19.913759);
console.log(aghCoord)
         this.addPointerWithText(aghCoord,this.generateTooltipHtml(
            {name:"AGH D9",
             eventCount:14,
             membersCount:9,
             currentEvent:{
                 name:"Sprzątanie warsztatu",
                 dateStart:"10.04 17:00",
                 dateEnd:"10.04 21:30",
             }
             }))
             var avgPos = new L.LatLng((aghCoord.lat+cuur.lat)/2,(aghCoord.lng+cuur.lng)/2);
            
             mymap.setView(avgPos);
    })
  },
  beforeMount() {
    
  },
};
// <div class="card_map">
// <h6 class="card_map__name">Name of location</h6>
// <p>
//   <i class="material-icons">event</i>
//   10
//   <i class="material-icons">accessibility</i>
//   10
// </p>
// </div>

</script>

<style lang="scss" >
@import '~leaflet/dist/leaflet.css';
#map{
    height:100vh;
    width:100%;
}
.card_map{
    &__event{
        border:1px solid black;
         border-radius: 5px;
         padding : 5px;
    }
}
</style>


