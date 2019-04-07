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
      <li class="active">
        <a href="#" class="waves-effect">
            <span class="nav-text">Koło Naukowe</span>
        </a>
      </li>
      <li>
        <a href="#" class="waves-effect">
          <span class="nav-text">Kumple</span>
        </a>
      </li>
      <li>
        <a href="#" class="waves-effect">
          <span class="nav-text">Grupa Biznesowa</span>
        </a>
      </li>
    </ul>
    <a href="#" data-target="slide-out" class="sidenav-trigger aplication__sideNavButton">
      <i class="material-icons">menu</i>
    </a>
    <Mapa></Mapa>
    <div class="row aplication__categoriesSideNav">
        <div class="row aplication__categoriesSideNav__overlay" v-if="cat1 || cat2 || cat3"></div>
        <ul class="sidenav">
            <li>
                <div class="divider">

                </div>
            <li>
                <a href="#" class="active" v-if="cat1" @click="tooglecat1">
                    <i class="material-icons">people</i>
                    <span class="nav-text">Osoby</span>
                    <div class="deep-orange lighten-1 aplication__categoriesSideNav__items">
                            <div class="card horizontal">
                            <div class="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6">
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                            </div>
                            <div class="card horizontal">
                            <div class="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6">
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
                            </div>
                            <div class="card horizontal">
                            <div class="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6">
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.</p>
                                </div>
                                <div class="card-action">
                                <a href="#">This is a link</a>
                                </div>
                            </div>
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
                    <span class="nav-text">Przedmioty</span>
                    <div class="deep-orange lighten-1 aplication__categoriesSideNav__items">
                            
                    </div>
                </a>
                <a href="#" class="" v-else @click="tooglecat3">
                    <i class="material-icons">toys</i>
                    <span class="nav-text">Przedmioty</span>
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
            }
  },
  mounted() {
    M.AutoInit();
  }
};
</script>