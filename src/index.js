function component() {
    let element = document.createElement('div');


    element.innerHTML = "Kurła działa :D";

    return element;
  }

  document.body.appendChild(component());