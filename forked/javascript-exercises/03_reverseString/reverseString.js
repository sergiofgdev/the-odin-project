const reverseString = function(string) {
    let textArray = string.split('')
    let newArray = []
    for (let i = textArray.length-1 ; i >= 0; i--){
        newArray.push(textArray[i])
    }
    let newString = ""
    for (let letter of newArray){
        newString += letter
    }
    return newString

};

reverseString("hola sergio")

// Do not edit below this line
module.exports = reverseString;
