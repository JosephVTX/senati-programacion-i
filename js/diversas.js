function totalImpuesto(subtotal, porcentaje) {
 
    let importeIgv = subtotal * (porcentaje / 100);
    let total = subtotal + importeIgv;
    document.querySelector(".subtotal").textContent = subtotal;
    document.querySelector(".importe_igv").textContent = importeIgv;
    document.querySelector(
      ".total_impuesto"
    ).textContent = `S/. ${total.toFixed(2)}`;
  
}

const promedioNotas = (nota1, nota2, nota3) => {
  let puntajeNotasE = document.getElementById("puntaje_nota");
  let promedioPonderadoE = document.getElementById("promedio_ponderado");

  let puntajeNotas = nota1 + nota2 + nota3;
  let promedioPonderado = nota1 * 0.2 + nota2 * 0.3 + nota3 * 0.5;

  puntajeNotasE.textContent = `${puntajeNotas}`;
  promedioPonderadoE.textContent = `${promedioPonderado}`;
};

const mostrarDatos = (
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  edad,
  carrera
) => {
  const datosBienvenida = document.querySelector(".datos.bienvenida");

  datosBienvenida.innerHTML += `
      Bienvenido (a) al Sistema ${nombre} ${apellidoPaterno} ${apellidoMaterno}, <br>
      usted esta inscrito en la carrera de ${carrera} y tiene ${edad} años.
    `;
};

const calcularSueldo = (
  nombre,
  apellidoPaterno,
  horasTrabajadas,
  costoHora,
  turno,
  hijos
) => {
  let bonificacion, totalPago;
  let datosTrabajador = document.querySelector(
    ".datos.bonificacion_trabajador"
  );
  let total = horasTrabajadas * costoHora;
  let asignacionFamiliar = hijos * 50;

  if (turno > 1) {
    bonificacion = total * 0.1;
  } else {
    bonificacion = 0;
  }

  totalPago = total + asignacionFamiliar + bonificacion;

  datosTrabajador.innerHTML = `
    
    Trabajador = ${nombre} ${apellidoPaterno} <br>
    Horas Trabajadas = ${horasTrabajadas} <br>
    Costo x Hora =  ${costoHora} <br>
    Cantidad de Turnos = ${turno} <br>
    Hijos = ${hijos} <br>
    Bonificacion = S/. ${bonificacion.toFixed(2)} <br>
    Asignacion Familiar = S/. ${asignacionFamiliar.toFixed(2)} <br>
    <p class='p-2 bg-gray-200 w-max text-black rounded-md mt-2'>TOTAL PAGO = S/. ${totalPago.toFixed(
      2
    )} <br></p>
    `;
};
const obtenerImpuesto = (importeSi, tipo) => {
  let importeCi;

  switch (tipo) {
    case 1:
      importeCi = importeSi + 0.21 * importeSi;
      break;

    case 2:
      importeCi = importeSi + 0.1 * importeSi;
      break;

    case 3:
      importeCi = importeSi + 0.05 * importeSi;
      break;
  }

  document.querySelector(
    ".datos.impuesto"
  ).innerHTML += `TOTAL IMPUESTO = S/. ${importeCi.toFixed(2)}`;
};

const tipoRueda = (diametro) => {
  let diametroRuedaAutoE = document.querySelector(".datos.rueda_auto"),
    diametroRuedaAuto;

  if (diametro > 1.4) {
    diametroRuedaAuto = "La rueda es para vehiculo grande";
  } else if (diametro > 0.8 && diametro < 1.4) {
    diametroRuedaAuto = "La rueda es para vehiculo mediano";
  } else {
    diametroRuedaAuto = "La rueda es para vehiculo pequeño";
  }

  diametroRuedaAutoE.innerHTML += `${diametroRuedaAuto}`;
};

totalImpuesto(500, 18);
promedioNotas(13, 15, 17);
mostrarDatos("Joseph", "Vega", "Callupe", 22, "Diseño y Desarrollo Web");
calcularSueldo("Joseph", "Vega", 24, 20, 2, 1);
obtenerImpuesto(400, 3);
tipoRueda(0.7);
