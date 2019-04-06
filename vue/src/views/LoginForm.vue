<template>
    <div class="row">
        <div class="col m8 offset-m4 s10 offset-s1 loginPanel__header" v-if="isLogin">
            <h1 class="deep-orange-text" >
                Logowanie do <span class="deep-orange-text text-darken-2">VORTEX</span>
            </h1>
            <p class="grey-text text-darken-2"> Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Suspendisse massa metus, 
                interdum et ante id, tristique tempor massa. </p>
        </div>
        <div class="col m8 offset-m4 s10 offset-s1 loginPanel__header" v-else>
            <h1 class="deep-orange-text" >
                Register to <span class="deep-orange-text text-darken-2">VORTEX</span>
            </h1>
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
            <div class="row" v-if="isLogin">
                <div class="input-field col m8 offset-m2 s10 offset-s1">
                    <input id="password" type="password" class="validate">
                    <label for="password">Repeat password</label>
                </div>
            </div>
            <div class="row" v-if="isLogin">
                    <div class="col m3 offset-m2 s6 offset-s1">
                        <a class="waves-effect btn-flat">Register</a>
                    </div>
                    <div class="col m3 offset-m2 s6 offset-s1">
                            <a class="waves-effect waves-light btn-small deep-orange darken-2" @click="submit" >Zaloguj</a>
                    </div>
            </div>
            <div class="row" v-else>
                    <div class="col m3 offset-m2 s6 offset-s1">
                        <label>Lorem ipsum dolor sit amet.</label>
                    </div>
                    <div class="col m3 offset-m2 s6 offset-s1">
                        <a class="waves-effect waves-light btn-small deep-orange darken-2">Register</a>
                    </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'LoginForm',
        props: ['isLogin'],
        data() {
            return {

            }
        },
        methods: {
            submit(){
                console.log(this.isLogin)
                console.log(this.user)
            }
        }
    }
</script>