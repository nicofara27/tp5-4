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

  //Muestra la hora en el formato am, si es 0 lo cambia por 12 y si es entre 1 y 9 le agrega un 0 adelante
  if (fechaActual.getHours() < 12) {
    if (fechaActual.getHours() === 0) {
      tiempo.innerHTML = `12:${fechaActual.getMinutes()}:${segundos} am`;
    }else if(fechaActual.getHours() >= 1 && fechaActual.getHours() <= 9) {
      tiempo.innerHTML = `${fechaActual.getHours()}:${"0" + fechaActual.getMinutes()}:${segundos} am`;
    } else {
        tiempo.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos} am`;
    }
  //Si la hora es entre 13 y 23 cambia su formato para mostrarla entre 01 y 11 pm
  } else {
    tiempo.innerHTML = `${
      "0" + (fechaActual.getHours() - 12)
    }:${fechaActual.getMinutes()}:${segundos} pm`;
  }
}

setInterval(obtenerFecha, 1000);
