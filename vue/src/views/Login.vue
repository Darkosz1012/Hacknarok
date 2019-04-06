<template>
<main class="loginPanel z-depth-2">
        
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt="tlo"/>
        </div>
        <div class="row">
            <div class="col m8 offset-m4 s10 offset-s1 loginPanel__header">
                <h1 class="deep-orange-text" >
                    Logowanie do <span class="deep-orange-text text-darken-2">VORTEX</span>
                </h1>
                <p class="grey-text text-darken-2"> Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Suspendisse massa metus, 
                    interdum et ante id, tristique tempor massa. </p>
            </div>
        </div>
        <div class="row">
            <form class="col m8 offset-m4 s10 offset-s1">
                <div class="row">
                    <div class="input-field col m8 offset-m2 s10 offset-s1">
                        <input id="email" type="email" class="validate" v-model="user.name" >
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col m8 offset-m2 s10 offset-s1">
                        <input id="password" type="password" class="validate" v-model="user.pass">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                        <div class="col m3 offset-m2 s6 offset-s1">
                            <a class="waves-effect btn-flat">Register</a>
                        </div>
                        <div class="col m3 offset-m2 s6 offset-s1">
                             <a class="waves-effect waves-light btn-small deep-orange darken-2" @click="submit" >Zaloguj</a>
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