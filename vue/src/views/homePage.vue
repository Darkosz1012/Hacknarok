<template>
    <html>

    <head>
    </head>

    <body>
        <main class="aplication">
            <nav> </nav>
            <ul id="slide-out" class="sidenav">
                <li class="active"><a href="#" class="waves-effect">
                        <i class="material-icons">dashboard</i>
                        <span class="nav-text">Panel Główny</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">people</i>
                        <span class="nav-text">Użytkownicy</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">folder</i>
                        <span class="nav-text">Menedżer plików</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">recent_actors</i>
                        <span class="nav-text">Osoby</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">settings_applications</i>
                        <span class="nav-text">Główna konfiguracja</span>
                </a></li>
                <li><div class="divider"></div></li>
                <li>
                    <a class="subheader">Podstony</a>
                </li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">home</i>
                        <span class="nav-text">Strona główna</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">pages</i>
                        <span class="nav-text">Aktualności</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">event_note</i>
                        <span class="nav-text">Wydarzenia</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">school</i>
                        <span class="nav-text">Specjalizacje</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">card_membership</i>
                        <span class="nav-text">O Szkole</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">photo_library</i>
                        <span class="nav-text">Galeria</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">library_books</i>
                        <span class="nav-text">Dokumenty</span>
                </a></li>
                <li><a href="#" class="waves-effect">
                        <i class="material-icons">contacts</i>
                        <span class="nav-text">Kontakt</span>
                </a></li>
            </ul>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        </main>
        <script src="../main.js"></script>
    </body>

    </html>
</template>

<style lang="scss">
    @import "@/sass/homePage.scss";
</style>

<script>
  
  export default {
  name: 'homePage',
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>