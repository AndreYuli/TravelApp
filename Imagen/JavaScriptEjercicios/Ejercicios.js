/*2. Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: 
edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores 
a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.40;
    } else {
        return 0;
    }
}

// código de prueba
console.log(calcularImpuestos(18, 1000)); // 400
console.log(calcularImpuestos(40, 10000)); // 4000
console.log(calcularImpuestos(17, 5000)); // 0
console.log(calcularImpuestos(30, 500)); // 0

/*
3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/
function bmi(peso, altura) {
    const bmiValue = peso / (altura * altura);
    if (bmiValue < 18.5) {
        return "Bajo de peso";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return "Normal";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// código de prueba
console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); // "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"

/*4. Imprimir un arreglo
Escribir una función llamada imprimirArreglo que reciba un arreglo e
 imprima cada elemento en una línea a parte:*/
 function imprimirArreglo(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);
// Expected output:
// 1
// Hola
// 2
// Mundo