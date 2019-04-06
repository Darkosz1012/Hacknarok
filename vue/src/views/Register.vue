<template>
    <main class="loginPanel z-depth-2">
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt="tlo"/>
        </div>
        <LoginForm :isLogin="false" />
    </main>
</template>

<style lang="scss">
    @import "@/sass/login.scss";
</style>

<script>
import Form from './Form'
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
  components: {
    Form
  }
}
</script>