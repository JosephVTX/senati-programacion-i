suma(12, 2); // Parametros: num1, num2
resta(10, 2); // Parametros: num1, num2
multi(10, 2); // Parametros: num1, num2
divi(12, 6); // Parametros: num1, num2
resto(10, 6); // Parametros: num1, num2

function suma(num1, num2) {
  let numeros = document.querySelectorAll(".suma_num");
  let resultado = document.querySelector(".suma_resultado");

  numeros[0].textContent = `Número 1 = ${num1}`;
  numeros[1].textContent = `Número 2 = ${num2}`;

  resultado.textContent = `Resultado = ${num1 + num2}`;
}

function resta(num1, num2) {
  let numeros = document.querySelectorAll(".resta_num");
  let resultado = document.querySelector(".resta_resultado");

  numeros[0].textContent = `Número 1 = ${num1}`;
  numeros[1].textContent = `Número 2 = ${num2}`;

  resultado.textContent = `Resultado = ${num1 - num2}`;
}

function multi(num1, num2) {
  let numeros = document.querySelectorAll(".multi_num");
  let resultado = document.querySelector(".multi_resultado");

  numeros[0].textContent = `Número 1 = ${num1}`;
  numeros[1].textContent = `Número 2 = ${num2}`;

  resultado.textContent = `Resultado = ${num1 * num2}`;
}

function divi(num1, num2) {
  let numeros = document.querySelectorAll(".divi_num");
  let resultado = document.querySelector(".divi_resultado");

  numeros[0].textContent = `Número 1 = ${num1}`;
  numeros[1].textContent = `Número 2 = ${num2}`;

  resultado.textContent = `Resultado = ${num1 / num2}`;
}

function resto(num1, num2) {
  let numeros = document.querySelectorAll(".resto_num");
  let resultado = document.querySelector(".resto_resultado");

  numeros[0].textContent = `Número 1 = ${num1}`;
  numeros[1].textContent = `Número 2 = ${num2}`;

  resultado.textContent = `Resultado = ${num1 % num2}`;
}

function permitir(edad) {
  return edad >= 18 ? true : false;
}

function fechaActual() {
  const fecha = new Date();

  return fecha;
}

function renderPermitir() {
  let renderPermitir_ = document.querySelector(".renderPermitir");

  if (permitir(8)) {
    renderPermitir_.textContent = "Eres mayor de edad.";
  } else {
    renderPermitir_.textContent = "Eres menor de edad.";
  }

  document.querySelector(".renderFecha").textContent = fechaActual();
}

renderPermitir();
