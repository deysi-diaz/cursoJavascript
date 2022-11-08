//function contarvocales(texto){retur cantidadvocales}

const contarVocales = palabra =>{
    const vocales = "aeiou";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes (letra.toLowerCase())){
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};
const cadena = "eucalipto";
const vocales = contarVocales(cadena);
console .log ("la palabra",cadena,vocales);








//function calculadora(num1,num2,opeacion{retul total}

//cdcalculadora(45,12,'resta')
function calcular (num1,num2,operacion){
 if(operacion=="suma"){
    total=num1+num2
 }
if(operacion=="resta"){
    total=num1-num2
}
if(operacion=="multiplicasion"){
    total=num1*num2
}
if(operacion=="divicion"){
    total=num1/num2
}
return total
}
console.log(calcular(45,12,"divicion"))