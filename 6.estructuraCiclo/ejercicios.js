///Un for en programación se usa cuando queremos repetir un conjunto de instrucciones un número finito de veces.
//Con for, las instrucciones se repiten el número de veces que le decimos,
// normalmente le ponemos un número ( o el valor de una variable o una constante).
for(let inicial=1;inicial<=20;inicial++){}

for (let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i) 
    }else{
        console.log(i) 
    }
}

//let vocales='aeiou'
//console.log(vocales.length)
//console.log(vocales[2])
//for(let i=0;i<=vocales.length;i++){
//console.log(vocales[i])


let texto1='hola como estas como te llamas'
let contador1=0
console.log (texto1.length)
for(let i=0;i<=texto1.length;i++){
    if(texto1[i]=='a'){
        contador1+=1
    }
}

console.log('tienes',contador,'vocales a')
// 

let texto='eucalipto'
let contador=0
for(let i=0;i<texto.length;i++){
if (texto[i]=='a'){
contador+=1
   }
   if (texto[i]=='e'){
       contador+=1
        }
        if (texto[i]=='i'){
         contador+=1
            }
            if (texto[i]=='o'){
            contenedor+=1
               }
               if (texto[i]=='u'){

           }
}






// haser un programa que muestre el factorial de un numero 
function facctorial(num){
    var r=n;
    if (n==0, n==1)
    return 1;
    while (n>1){
        n--;
        r=r*n;
    }
    return r;
}


//haser un programa que determine si un texto es palidromo 


 
// hacer un programa que muestre los primeros numeros 
//de la serie de fiboanci
let n1= 0;
let n2= 1;
for(let i=0; i<10; i++){
    r= n1+n2;
    n1=n2;
    n2=r
    console.log(r); git
}