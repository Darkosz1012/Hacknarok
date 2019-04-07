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
      groups:[

      ]
    };
  },
  methods: {
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