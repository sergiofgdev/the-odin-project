
const container = document.querySelector('.board')


createBoard()

function createBoard() {
    const loopTime = 256;
    for (let i = 0; i < loopTime; i++) {
        createSquare(i)
    }
}

// Create square
function createSquare(i) {
    var num = i
    // 1. element creation 
    var squareChild = document.createElement('div');
    squareChild.classList.add('squareBlock');
    squareChild.id = num
    // 2. parent node
    container.appendChild(squareChild)
}

const list = container.querySelectorAll('.squareBlock')


// Check if we clicked the square
container.addEventListener("click", function (e) {
    if (e.target.classList.contains('squareBlock')) {
        var numId = e.target.id
        console.log(numId)
        changeSquare(numId)
    }
})

// On mouseover we paint
container.addEventListener("mouseover", function (e) {
    console.log('dragging')
    if (e.target.classList.contains('squareBlock')) {
        console.log('dragging')
        var numId = e.target.id
        console.log(numId)
        changeSquare(numId)
    }
})


function changeSquare(numId) {
    var newSquare = document.getElementById(numId)
    newSquare.style.backgroundColor = "black"
}


// const source = document.getElementById("delete id");
// source.addEventListener("mouseover", (event) => {
//   console.log("dragging");
// });