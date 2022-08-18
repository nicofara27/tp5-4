function obtenerFecha() {
  let fechaActual = new Date();

  let fecha = document.getElementById("fecha");
  let tiempo = document.getElementById("tiempo");

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  //Agrega al elemento fecha todos los datos referidos al mismo
  fecha.innerHTML = `${
    dias[fechaActual.getDay()]
  } ${fechaActual.getDate()} de ${
    meses[fechaActual.getMonth()]
  } del ${fechaActual.getFullYear()}`;

  //Creacion de la variable que almacena los segundos y adicion de un 0 si el nro es de un digito
  let segundos = fechaActual.getSeconds();
  if (segundos < 10) {
    segundos = "0" + segundos;
  }

  let minutos = fechaActual.getMinutes();
  if (segundos < 10) {
    minutos = "0" + minutos;
  }

  //Muestra la hora en el formato am, si es 0 lo cambia por 12 y si es entre 1 y 9 le agrega un 0 adelante
  if (fechaActual.getHours() < 12) {
    if (fechaActual.getHours() === 0) {
      tiempo.innerHTML = `12:${minutos}:${segundos} am`;
    }else if(fechaActual.getHours() >= 1 && fechaActual.getHours() <= 9) {
      tiempo.innerHTML = `${fechaActual.getHours()}:${"0" + minutos}:${segundos} am`;
    } else {
        tiempo.innerHTML = `${fechaActual.getHours()}:${minutos}:${segundos} am`;
    }
  //Si la hora es entre 13 y 23 cambia su formato para mostrarla entre 01 y 11 pm
  } else {
    tiempo.innerHTML = `${
      "0" + (fechaActual.getHours() - 12)
    }:${fechaActual.getMinutes()}:${segundos} pm`;
  }
}

setInterval(obtenerFecha, 1000);

function switchColor() {
  let boton = document.querySelector("button");
  let body = document.querySelector("body");
  let reloj = document.getElementById("titulo");

  if(body.classList.contains("bg-black")) {
    body.className = "bg-light";
  } else {
    body.className = "bg-black";
  }

  if(boton.classList.contains("bi-brightness-high")) {
    boton.className = "bi bi-moon bg-light text-dark my-2 me-4";
  } else {
    boton.className = "bi bi-brightness-high bg-black text-light my-2 me-4";
  }

  if(titulo.classList.contains("text-light")) {
    titulo.className = "text-danger text-center";
  } else {
    titulo.className = "text-light text-center";
  }


}