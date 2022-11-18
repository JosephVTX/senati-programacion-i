let datosArr = [
  "Joseph",
  "Vega",
  "Los Olivos",
  "Desarrollar Webs",
  22,
  "1395609@senati.pe",
];
let datos = document.querySelectorAll(".datos");
let btnCalcular = document.getElementById("btnCalcular");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let resto = document.getElementById("resto");

datos.forEach((e, i) => {
  e.textContent = datosArr[i];
});

btnCalcular.addEventListener("click", () => {
  let num1 = parseInt(document.querySelector(".num1").value);
  let num2 = parseInt(document.querySelector(".num2").value);

  if (num1 && num2) {
    suma.textContent = num1 + num2;
    resta.textContent = num1 - num2;
    multiplicacion.textContent = num1 * num2;
    division.textContent = num1 / num2;
    resto.textContent = num1 % num2;
  }
});

let descripcion, nota;

let curso = prompt("Escriba el nombre del curso: ");
let condicion = prompt("Ingrese condición [1, 2]: ");

if (condicion == "1") {
  descripcion = "Aprobado";
  nota = 18;
} else {
  descripcion = "Desaprobado";
  nota = 5;
}

document.querySelector("#curso").textContent = curso;
document.querySelector("#descripcion").textContent = descripcion;
document.querySelector("#nota").textContent = nota;
