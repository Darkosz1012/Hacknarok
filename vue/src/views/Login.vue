<template>
<main class="loginPanel">
        
        <div class="loginPanel__image">
            <img src="@/assets/background.jpg" alt=""/>
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
                        <input id="email" type="email" class="validate">
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s8 offset-s2">
                        <input id="password" type="password" class="validate">
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                        <div class="col s4 offset-s7">
                            <a class="waves-effect waves-light btn-small indigo darken-2">Zaloguj</a>
                        </div>
                </div>
            </form>
        </div>
  </main>


</template>

<style lang="scss">
.loginPanel{
    width: 90vh;
    left: inherit;
    position: relative;
    height: 80vh;
    padding: 2rem;
    border-radius: 0.5rem;
    overflow: hidden;
    @media screen and (max-width: 600px) {
        padding: 10rem;
        width: 100vw;
        height: 100vh;
    }
    &__header{
        h1{
            margin-left: 2rem;
            margin-right: 2rem;
            font-size: 2rem;
        }
        span{
            font-weight: bold;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            //color: $color-text-distinction;
        }
        p{
            margin-left: 2rem;
            margin-right: 2rem;
            font-size: 1rem;
            //color: $color-text-dark;
        }
    }
    &__image{
        height: 100%;
        display: block;
        width: calc(100%/3);
        //background: $color-distinction;
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
        img{
            height: 100%;
        }
    }
}
</style>