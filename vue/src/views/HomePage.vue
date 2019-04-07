<template>
  <main class="aplication">
    <ul id="slide-out" class="sidenav">
      <li>
        <div class="user-view">
          <div class="background">
            <img src="@/assets/background.jpg">
          </div>
          <a href="#user">
            <img class="circle" src="@/assets/background.jpg">
          </a>
          <a href="#name">
            <span class="white-text name">John Doe</span>
          </a>
          <a href="#email">
            <span class="white-text email">jdandturk@gmail.com</span>
          </a>
        </div>
      </li>
      <li>
        <a class="subheader">Grupy</a>
      </li>
      <li v-for="item in groups" >
        <a href="#" class="waves-effect">
            <span class="nav-text">{{item.name}}</span>
        </a>
      </li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger aplication__sideNavButton">
      <i class="material-icons">menu</i>
    </a>
    <Mapa></Mapa>
    <div class="row aplication__categoriesSideNav">
        <div class="row aplication__categoriesSideNav__overlay" v-if="cat1 || cat2 || cat3" @click="toogleALLcat"></div>
        <ul class="sidenav">
            <li>
                <div class="divider">

                </div>
            <li>
                <a href="#" class="active" v-if="cat1" @click="tooglecat1">
                    <i class="material-icons">people</i>
                    <span class="nav-text">Osoby</span>
                    <div class="deep-orange lighten-1 aplication__categoriesSideNav__items">
                            <div class="card z-depth-3 " v-for="item in people">
                                <h6 class="card__name indigo-text text-darken-3">{{item.name}}</h6>
                                <p><div  class="divider"></div></p>
                                <p class="card__description ">Stanowisko: {{item.description}}</p>
                                <p class="card__status">Status: {{item.status}}</p>
                                <p class="card__location">Miejsce: {{item.location ? item.location : "D10"}}</p>
                            </div>
                           
                    </div>
                </a>
                <a href="#" class="" v-else @click="tooglecat1">
                    <i class="material-icons">people</i>
                    <span class="nav-text">Osoby</span>
                </a>
            </li>
            <li>
                <a href="#" class="active" v-if="cat2" @click="tooglecat2" >
                    <i class="material-icons">terrain</i>
                    <span class="nav-text">Miejsca</span>
                    <div class="deep-orange lighten-1 aplication__categoriesSideNav__items">
                        <div class="card z-depth-3 " v-for="item in location">
                            <h6 class="card__name indigo-text text-darken-3">{{item.name}}</h6>
                            <p><div  class="divider"></div></p>
                            <p class="card__description ">{{item.description}}</p>
                            
                            <!-- <p class="card-location__location">Miejsce: {{item.location ? item.location : "D10"}}</p> -->
                            <p class="card__member-count">Obecni: {{item.people}}</p>
                        </div>
                        
                    </div>
                </a>
                <a href="#" class="" v-else @click="tooglecat2" >
                    <i class="material-icons">terrain</i>
                    <span class="nav-text">Miejsca</span>
                </a>
            </li>
            <li>
                <a href="#" class="active" v-if="cat3" @click="tooglecat3">
                    <i class="material-icons">toys</i>
                    <span class="nav-text">Wydarzenia</span>
                    <div class="deep-orange lighten-1 aplication__categoriesSideNav__items">
                        <div class="card z-depth-3 " v-for="item in events">
                            <h6 class="card__name indigo-text text-darken-3">{{item.name}}</h6>
                            <p><div  class="divider"></div></p>
                            <p class="card__date">Data rozpoczęcia: {{item.date_start.split('.').slice(0,2).join('.')}}</p>
                            <p class="card__date">Data zakończenia: {{item.date_end.split('.').slice(0,2).join('.')}}</p>
                            <p class="card__location">Miejsce: {{item.namelocation}}</p>
                            <!-- <p class="card-location__location">Miejsce: {{item.location ? item.location : "D10"}}</p> -->
                            <p class="card__description ">Opis: {{item.description}}</p>
                        </div>
                    </div>
                </a>
                <a href="#" class="" v-else @click="tooglecat3">
                    <i class="material-icons">toys</i>
                    <span class="nav-text">Wydarzenia</span>
                </a>
            </li>
        </ul>
    </div>
  </main>
</template>

<style lang="scss">
@import "@/sass/homePage.scss";
</style>

<script>
export default {
  name: "homePage",
  data() {
     return {
                cat1:false,
                cat2:false,
                cat3:false,
      groups:[

      ],
      events:[
          {
              "id":1,
              "name":"Spotkanie zespołu",
              "date_start":new Date().toLocaleDateString(),
              "date_end":new Date().toLocaleDateString(),
              "namelocation":"Warsztat",
              "description": "Omówinie bieżących spraw"
          },
          {
              "id":2,
              "name":"Test areodynamiki modelu",
              "date_start":new Date().toLocaleDateString(),
              "date_end":new Date().toLocaleDateString(),
              "namelocation":"Wydział Robotyki",
              "description": ""
          },
          {
              "id":3,
              "name":"Impreza",
              "date_start":new Date().toLocaleDateString(),
              "date_end":new Date().toLocaleDateString(),
              "namelocation":"Góra Olimp",
              "description": "Impreza integracyjna dla nowych członków zespołu"
          }
      ],
      location:[
          {
              "id":1,
              "name":"Warsztat",
              "lat": "",
              "lng":"",
              "description":"Budynek D-9",
              "people":8
          },
          {
              "id":2,
              "name":"Wydział Robotyki",
              "lat": "",
              "lng":"",
              "description":"Budynek C-3",
              "people":2
          },
          {
              "id":3,
              "name":"Góra Olimp",
              "lat": "",
              "lng":"",
              "description":"Pub przy ulicy czarnowiejskiej",
              "people":0
          }
      ],
      people:[
          {
              "id":1,
              "name":"Anna G.",
              "description":"Inżynier oprogramowania",
              "status":"Wykłady kończę o 13 i będę miała czas do 15"
          },
          {
              "id":2,
              "name":"Mateusz C.",
              "description":"Koordynator",
              "status":"Jestem aklutanie w warsztacie i potrzebuję pomocy przy sklejaniu modelu"
          },
          {
              "id":3,
              "name":"Rafał K.",
              "description":"Inżynier zasilania",
              "status":"Jestem zajęty"
          }
          
      ],
    };
  },
  methods: {
            tooglecat1()
            {
                this.cat1=!this.cat1
                this.cat2=false;
                this.cat3=false;
            },
            tooglecat2()
            {
                this.cat1=false;
                this.cat2=!this.cat2
                this.cat3=false;
            },
            tooglecat3()
            {
                this.cat1=false;
                this.cat2=false;
                this.cat3=!this.cat3
            },
            toogleALLcat(){
                this.cat1=false;
                this.cat2=false;
                this.cat3=false;
            },
            getData:function(){
            console.log("getData")
            this.httpReqToken("/usersgroups/find/user",{id:this.ls("id")},(data)=>{
                console.log(data)
                if(data.success)
                this.groups = data.data
            })
    }
  },
  mounted() {
    M.AutoInit();
    this.getData()
  }
};
</script>