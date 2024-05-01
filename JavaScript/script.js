let nombre = prompt("ingresa tu nombre");
let peso = prompt("ingresa tu peso en kilogramos");
let altura = prompt("ingresa tu altura en metros");

function indiceMasaCorporal(peso, altura){
    let indiceMasaCorporal = peso/altura^2;

    return(indiceMasaCorporal)
};



let resultadoImc = indiceMasaCorporal(peso,altura);

console.log(" hola " +  nombre  +  " tu masa corporal es: "  +  resultadoImc);


if (resultadoImc < 18.5){
    console.log(nombre + " tienes bajo IMC");

} else if (resultadoImc >= 18.6 && resultadoImc <= 24.9) {
    console.log("¡Felicidades! Tienes un IMC óptimo.");

} else if (resultadoImc > 24.9){
    console.log(nombre + " tu IMC es alto: " + resultadoImc);
}