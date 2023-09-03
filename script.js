/*funciones callback: 
    Funciones que reciben otras funciones por parametro 
            ejemplo: sumar - resta -division - multiplicar
    */ 

function operar(num, fn) {
    var resultado = fn (num)
    return resultado
}

function sumar(num){
    return num + 10 
}
function restar (num){
    return num-10
}
function multiplicar (num) {
    return num*2
}
var res= operar(25,sumar)
var res2= operar (25, restar) 
var res3= operar (25, multiplicar)
/*console.log ("res", res)
console.log ("res2", res2)
console.log ("res3", res3) 
*/
function forEach(arr,fn) {
    console.log ("el arreglo a iterar es ", arr)
    for(var i=0;i<arr.length;i++) {
        fn(arr[i])
    }
        
}
var arr= [1,2,3,4,5]
function imprimir (el) {
    console.log ("El elemento es: ",el)
}
function multipicarx2 (num)  {
     var res = num*2 
     console.log ("El resultado es ", res)
}

forEach (arr,multipicarx2)


