
const sumAll = function (num1, num2) {
   let suma 

   if (typeof(num1) != 'number' || typeof(num2) != 'number'){
    suma = 'ERROR'
   }else{
    suma = sumar(num1, num2)
   }
   console.log(suma)
    return suma

}

function sumar(num1, num2){
    let suma = 0
    let maxValue 
    let minValue 

    if (num1 > num2){
        maxValue = num1
        minValue = num2
    }else{
        minValue = num1
        maxValue = num2
    }
    for (let i = minValue; i <= maxValue; i++){
        suma += i
    }
    suma < 0 ? suma = "ERROR" : suma = suma // Comprueba si el numero es negativo

    return suma
}

sumAll(2, 5)


// Do not edit below this line
module.exports = sumAll;
