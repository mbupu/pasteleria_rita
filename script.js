

setTimeout(function() {
    // Oculta el loader y muestra el contenido
    document.getElementById("loader").style.display = "none";
    document.getElementById("contenido").style.display = "block";
    
    // Desbloquea el scroll quitando la clase 'loading'
    document.body.classList.remove("loading");
  }, 2000);  // Ajusta el tiempo a lo que necesites

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () =>{ // Acción "Abrir" en el boton de menú
  nav.classList.add("visible"); 
})

cerrar.addEventListener("click", () => { // Acción "Cerrar" en el boton de menú abierto
  nav.classList.remove("visible");
})