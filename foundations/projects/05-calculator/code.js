let screen = document.querySelector(".screen")
const btnNumber = document.querySelectorAll(".number")
const btnClear = document.querySelector("#clear")
const btnOperation = document.querySelectorAll(".operation")

let mainNumber = 0
let temporalNumber = 0
let operation = ""
let mainOperation = ""

// Button click for numbers
btnNumber.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.id)
        temporalNumber = parseInt(temporalNumber + element.id)
        screen.textContent = temporalNumber
    })
});

// button click for clear
btnClear.addEventListener('click', () => {
    console.log("clear button selected")
    temporalNumber = 0
    mainNumber = 0
    screen.textContent = temporalNumber
})


// button click for each operation
btnOperation.forEach(element => {
    element.addEventListener("click", () => {
        switch (element.id) {
            case "divide":
                operation = "divide"
                break;
            case "multiply":
                operation = "multiply"
                break;
            case "substract":
                operation = "substract"
                break;
            case "add":
                operation = "add"
                break;
        }
        operate(operation)
        console.log(`You presed ${operation}`)
        //call operate
        
    })
})

//operate
const operate = function (operation, a, b) {
    //TODO FLOW DIAGRAM OF THE OPERATIONS AND THEN CODE IT
    
    

}

// //add
// const add = function (a, b) {
//     console.log("add")
//     console.log("delete")


// }

// //subtract
// const subtract = function (a, b) {
//     console.log("substract")
//     console.log("delete")


// }

// //multiply
// const multiply = function (a, b) {
//     console.log("multiply")


// }

// //divide
// const divide = function (a, b) {
//     console.log("divide")


// }
