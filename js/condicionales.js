const preguntas = document.querySelectorAll(".section__content");

function pregunta1() {
  let pregunta = preguntas[0];
  let a = 1,
    b = -4,
    c = 4,
    resultado1,
    resultado2;

  resultado1 = (-(b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;
  resultado2 = (-(b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a;

  pregunta.innerHTML += `<h4 >a = ${a} b = ${b} c = ${c}</h4>`;
  pregunta.innerHTML += `<p class='mt-2'> RAIZ  1: ${resultado1} </p>`;
  pregunta.innerHTML += `<p class='mb-2'> RAIZ  2: ${resultado2} </p>`;

  if (resultado1 < 0) {
    pregunta.innerHTML += `<p> La Raiz 1: es negativo </p>`;
  } else {
    pregunta.innerHTML += `<p> La Raiz 1: es positivo </p>`;
  }

  if (resultado2 < 0) {
    pregunta.innerHTML += `<p> La Raiz 2: es negativo </p>`;
  } else {
    pregunta.innerHTML += `<p> La Raiz 2: es positivo </p>`;
  }

  if (resultado1 != resultado2) {
    pregunta.innerHTML += `Resultado: ${Math.round(
      resultado1
    )} es diferente de ${Math.round(resultado2)}`;
  } else {
    pregunta.innerHTML += `Resultado: ${Math.round(resultado1)} y ${Math.round(
      resultado2
    )} son iguales`;
  }
}

function pregunta2() {
  let pregunta = preguntas[1];

  let a = 11,
    b = 7,
    c = 4;

  pregunta.innerHTML += `<p>Los números son los siguientes ${a} | ${b} | ${c} </p>`;
  if (a > b && a > c) {
    pregunta.innerHTML += `${a} es el mayor`;
  } else if (b > c && b > a) {
    pregunta.innerHTML += `${b} es el mayor`;
  } else {
    pregunta.innerHTML += `${c} es el mayor`;
  }
}

function pregunta3() {
  const renderHelado = document.querySelector("#renderHelado");
  const precioHelado = 1.9;
  const helados = {
    0: ["Sin Topping", 0],
    1: ["con Topping de Oreo", 1],
    2: ["con Topping de KitKat", 1.5],
    3: ["con Topping de Brownie", 0.75],
    4: ["con Topping de Lentejitas", 0.95],
  };

  const btnComprar = document.querySelector("#btnComprar");
  btnComprar.addEventListener("click", () => {
    let helado = document.querySelector("#helado");

    let eleccion = helados[helado.value][0];
    let totalPagar = helados[helado.value][1] + precioHelado;
    renderHelado.innerHTML = `
        
        <p>Elegiste Helado ${eleccion}</p>
        <p>Precio del Helado: ${precioHelado}</p>
        <p>Total a Pagar: S/. ${totalPagar.toFixed(2)}</p>
        
        `;
  });
}

function pregunta4() {
  let renderSexo = document.querySelector(".renderSexo");
  let btnVerificar = document.querySelector("#btnVerificar");

  btnVerificar.addEventListener("click", () => {
    let sexo = document.querySelector("#sexo");
    let edad = document.querySelector("#edad");

    if (sexo.value.toUpperCase() == "M") {
      if (parseInt(edad.value) >= 60) {
        renderSexo.innerHTML = `<p>Usted es Hombre y ya se puede jubilar</p>`;
      } else {
        renderSexo.innerHTML = `<p>Usted es Hombre y no se puede jubilar</p>`;
      }
    } else {
      if (parseInt(edad.value) > 54) {
        renderSexo.innerHTML = `<p>Usted es Mujer y  se puede jubilar</p>`;
      } else {
        renderSexo.innerHTML = `<p>Usted es Mujer y no se puede jubilar</p>`;
      }
    }
  });
}

function pregunta5() {
  let renderTransporte = document.querySelector(".renderTransporte");
  let btnTransporte = document.querySelector("#btnTransporte");

  btnTransporte.addEventListener("click", () => {
    let inputTransporte = parseInt(
      document.querySelector("#inputTransporte").value
    );

    if (inputTransporte < 5) {
      renderTransporte.innerHTML = `El usuario tiene menos de 5 años por lo tanto entra gratis.`;
    } else if (inputTransporte >= 5 && inputTransporte <= 18) {
      renderTransporte.innerHTML = `El usuario esta entre 5 y 18  años por lo tanto debe pagar 5 Soles.`;
    } else {
      renderTransporte.innerHTML = `El usuario tiene mas de 18 años por lo tango paga 10 Soles.`;
    }
  });
}

pregunta1();
pregunta2();
pregunta3();
pregunta4();
pregunta5();
