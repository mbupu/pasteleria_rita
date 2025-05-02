// window.addEventListener("load", function() {
//     Document.getElementById("loader").style.display = "none";
//     Document.getElementById("contenido").style.display = "block";
// });

// setTimeout(function() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("contenido").style.display = "block";
//   }, 3000);

//   setTimeout(function() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("contenido").style.display = "block";
//   document.body.classList.remove("loading"); // Esto reactiva el scroll
// }, 3000);

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

abrir.addEventListener("click", () =>{
  nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
})