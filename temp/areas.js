const areaCuadrado = (lado) => {

    /* LADO AL CUADRADO */

    let resultado_area = document.querySelector(".area_cuadrado_resultado");
    document.querySelector(".area_cuadrado_num").textContent = `Lado = ${lado}`
    resultado_area.textContent = `Resultado = ${Math.pow(lado, 2)}`

}

const areaCirculo = (radio) => {

    let resultado = document.querySelector(".area_circulo_resultado")
    document.querySelector(".area_circulo_num").textContent = `Radio = ${radio}`

    resultado.textContent = `Area = ${Math.pow(radio, 2)}`
    
}

const areaTriangulo = (base, altura) => {

    let resultado = document.querySelector(".area_triangulo_resultado")
    document.querySelector(".area_triangulo_num1").textContent = `Base = ${base}`
    document.querySelector(".area_triangulo_num2").textContent = `Altura = ${altura}`

    resultado.textContent = `Resultado = ${(base * altura)/2}`
}

const areaRectangulo = (base, altura) => {

    let resultado = document.querySelector(".area_rectangulo_resultado")
    document.querySelector(".area_rectangulo_num1").textContent = `Base = ${base}`
    document.querySelector(".area_rectangulo_num2").textContent = `Altura = ${altura}`

    resultado.textContent = `Resultado = ${(base / altura)}`
}

const areaCilindro = (radio, altura) => {

    let area;
    const pi = 3.1416
    
    area = 2*pi*radio*(radio + altura)

    document.querySelector(".area_cilindro_num1").textContent = `Radio = ${radio}`
    document.querySelector(".area_cilindro_num2").textContent = `Altura = ${altura}`
    document.querySelector(".area_cilindro_resultado").textContent = `Resultado = ${Math.round(area)}`
}

const areaEsfera = (radio) => {

    let area;
    const pi = 3.1416
    area = 4*pi*(Math.pow(radio, 2))

    document.querySelector(".area_esfera_num1").textContent = `Radio = ${radio}`
    document.querySelector(".area_esfera_resultado").textContent = `Resultado = ${Math.round(area)}`

}

const areaCono = (radio, generatriz) => {

    let area;
    const pi = 3.1416
    area = pi*radio*(radio + generatriz)

    document.querySelector(".area_cono_num1").textContent = `Radio = ${radio}`
    document.querySelector(".area_cono_num2").textContent = `Generatriz = ${generatriz}`
    document.querySelector(".area_cono_resultado").textContent = `Resultado = ${Math.round(area)}`

}

const areaPrisma = (lado,   altura) => {

    let area;
    area = lado*((Math.sqrt(3, 2))/lado + 3*altura)

    document.querySelector(".area_prisma_num1").textContent = `Lado = ${lado}`
    document.querySelector(".area_prisma_num2").textContent = `Altura = ${altura}`
    document.querySelector(".area_prisma_resultado").textContent = `Area = ${Math.round(altura, 2)}`
    
}

const areaPiramide = (lado, altura) => {

    let area;

    area = Math.pow(lado, 2) + (2*lado*altura)
    document.querySelector(".area_piramide_num1").textContent = `Lado = ${lado}`
    document.querySelector(".area_piramide_num2").textContent = `Altura = ${altura}`
    document.querySelector(".area_piramide_resultado").textContent = `Area = ${area}`

}
areaCuadrado(5)
areaCirculo(5)
areaTriangulo(10, 4)
areaRectangulo(10, 2)
areaCilindro(6, 2)
areaCono(5, 6)
areaEsfera(5)
areaPrisma(6, 2)
areaPiramide(6, 2)