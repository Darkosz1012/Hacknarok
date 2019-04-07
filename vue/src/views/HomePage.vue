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
    <div class="row aplication__categoriesSideNav">
        <ul class="sidenav">
            <li>
                <div class="divider">

                </div>
            <li>
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
    return {};
  },
  methods: {},
  mounted() {
    M.AutoInit();
  }
};
</script>