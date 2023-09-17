/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let persona = new Array();
  persona[0] = "Mi perro";
  persona[1] = "Mi mamá";
  persona[2] = "Mi hermana";

  let accion = new Array();
  accion[0] = "rompió";
  accion[1] = "escondió";
  accion[2] = "se llevo";

  let objeto = new Array();
  objeto[0] = "mi tarea";
  objeto[1] = "mis llaves";
  objeto[2] = "mi cartera";

  let timepo = new Array();
  timepo[0] = "ayer";
  timepo[1] = "hoy";
  timepo[2] = "durante la comida";
  {
    document.querySelector("#parte1").innerHTML =
      persona[Math.floor(Math.random() * persona.length)];
    document.querySelector("#parte2").innerHTML =
      accion[Math.floor(Math.random() * accion.length)];
    document.querySelector("#parte3").innerHTML =
      objeto[Math.floor(Math.random() * objeto.length)];
    document.querySelector("#parte4").innerHTML =
      timepo[Math.floor(Math.random() * timepo.length)];
  }
};
