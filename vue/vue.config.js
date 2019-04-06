module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `@import "~materialize-css/sass/materialize.scss";`
      }
    }
  }
}