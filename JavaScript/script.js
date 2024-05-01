let nombre = prompt("ingresa tu nombre");
let peso = prompt("ingresa tu peso en kilogramos");
let altura = prompt("ingresa tu altura en metros");

function indiceMasaCorporal(peso, altura){
    let indiceMasaCorporal = peso/altura^2;

    return(indiceMasaCorporal)
};



let resultadoImc = indiceMasaCorporal(peso,altura);

console.log(" hola " +  nombre  +  " tu masa corporal es: "  +  resultadoImc);