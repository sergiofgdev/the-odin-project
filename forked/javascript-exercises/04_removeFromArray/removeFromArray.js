const removeFromArray = function (...args) {

    // theArgs.push(value) //A;adimos el value al array con los argumentos restantes
    // let newArrayValues = array // copiamos el array, sobre el nuevo creado es sobre el que borraremos
    // console.log("Original array = "+array)
    // console.log("Copy array = "+newArrayValues)
    // console.log("Removal array = "+theArgs)
    // console.log(array)
    // console.log(array.length)
    // console.log(theArgs.length)

    // let longitudArray
    // longitudArray = array.length
    // for (let i = 0; i < longitudArray; i++) { //recorre 4 veces
    //     console.log("num array: " + array[i])//borrar
    //     for (let valueItem of theArgs) { //recorre 4 veces 
    //         console.log("num argumento: " + valueItem)
    //         if (array[i] == valueItem) {
    //             let index 
    //             index = array.indexOf(valueItem)
    //             if (index > -1) {
    //                 newArrayValues.splice(index, 1)
    //             }
    //         }
    //     }

    // }
    // console.log("- RESULTADO FINAL: " + newArrayValues)
    // return newArrayValues


    // we have 2 solutions here, an easier one and a more advanced one.
    // The easiest way to get an array of all of the arguments that are passed to a function
    // is using the rest operator. If this is unfamiliar to you look it up!
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // so we create a new array with every item, except those that should be removed
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    // and return that array
    return newArray;


    // A simpler, but more advanced way to do it is to use the 'filter' function,
    // which basically does what we did with the forEach above.

    // var removeFromArray = function(...args) {
    //   const array = args[0]
    //   return array.filter(val => !args.includes(val))
    // }
    //
};



removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)

// Do not edit below this line
module.exports = removeFromArray;
