<template>
    <div>
        <div class="row">
            <div class="col m8 offset-m4 s10 offset-s1 loginPanel__header" v-if="isLogin">
                <h1 class="deep-orange-text" >
                    Log in <span class="deep-orange-text text-darken-2">VORTEX</span>
                </h1>

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
                <div class="row" v-if="!isLogin">
                    <div class="input-field col m8 offset-m2 s10 offset-s1">
                        <input id="password" type="password" class="validate">
                        <label for="password">Repeat password</label>
                    </div>
                </div>
                <div class="row" v-if="isLogin">
                        <div class="col m3 offset-m2 s6 offset-s1">
                            <a class="waves-effect btn-flat" @click="toogleLogin" >Register</a>
                        </div>
                        <div class="col m3 offset-m2 s6 offset-s1">
                                <a class="waves-effect waves-light btn-small deep-orange darken-2" @click="submitLogin" >Zaloguj</a>
                        </div>
                </div>
                <div class="row" v-else>
                        <div class="col m3 offset-m2 s6 offset-s1">
                            <a class="waves-effect btn-flat" @click="toogleLogin" >Back</a>
                        </div>
                        <div class="col m3 offset-m2 s6 offset-s1">
                            <a class="waves-effect waves-light btn-small deep-orange darken-2" @click="submitRegister" >Register</a>
                        </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'LoginForm',        
        data() {
            return {
                isLogin:true,
                user: {
                name: '',
                pass: ''
            }
            }
        },
        methods: {
            submitLogin() {               
              
               
               this.httpReq("/authenticate/json",{"username": this.user.name, "password": this.user.pass},(data)=>{
                    console.log(data)
                    this.ls("id",data.data.id);
                    this.ls("username",data.data.username);
                    this.ls("token",data.token);
                    if(data.success)
                    {
                        console.log("home")
                        this.router.push('home');
                    }

                });
            },
            submitRegister() {
            
               this.httpReq("/authenticate/registration",{"username": this.user.name, "password": this.user.pass},(data)=>{
                    console.log(data);
                    this.isLogin=true;
                });
            },
            toogleLogin()
            {
                this.isLogin=!this.isLogin
            }
        }
    }
</script>