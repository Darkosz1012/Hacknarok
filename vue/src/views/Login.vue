<template>
<main class="loginPanel">
        
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt="tlo"/>
        </div>
        <div class="row">
            <div class="col m8 offset-m4 s10 offset-s2 loginPanel__header">
                <h1 class="deep-orange-text" >
                    Logowanie do <span class="deep-orange-text text-darken-2">VORTEX</span>
                </h1>
                <p class="grey-text text-darken-2"> Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse massa metus, 
                    interdum et ante id, tristique tempor massa. </p>
            </div>
        </div>
        <div class="row">
            <form class="col s8 offset-s4">
                <div class="row">
                    <div class="input-field col s8 offset-s2">
                        <input id="email" type="email" class="validate" v-model="user.name" >
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s8 offset-s2">
                        <input id="password" type="password" class="validate" v-model="user.pass">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                        <div class="col s4 offset-s7">
                            <a class="waves-effect waves-light btn-small indigo darken-2" @click="submit" >Zaloguj</a>
                        </div>
                </div>
            </form>
        </div>
  </main>


</template>

<style lang="scss">
    @import "@/sass/login.scss";
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        name: '',
        pass: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.user)
    }
  }
}
</script>