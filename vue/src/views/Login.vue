<template>
  <main class="loginPanel z-depth-2">
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt="tlo"/>
        </div>
        <LoginForm :isLogin="true" />
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
  methods: {
    submit() {
      console.log(this.user)
        var xhr = new XMLHttpRequest();
        var url = "http://localhost:3000/authenticate/json";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
               console.log(json);
            }
        };
        var data = JSON.stringify({"username": this.user.name, "password": this.user.pass});
        xhr.send(data);
    }
  }
}
</script>