<template>
  <main class="loginPanel z-depth-2">
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt="tlo"/>
        </div>
        <LoginForm />
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
      
    }
  },
  methods: {
  }
}
</script>