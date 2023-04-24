// Guardo en container el elemento al que quiero a;adir lo que voy a crear
const container = document.querySelector('#containter')

// <p>
const contentP = document.createElement('p')// Guardo en una nueva variable el atributo que voy a crear, en este caso <p>
contentP.classList.add('paragrafo')// Le a;ado una clase a este elemento
contentP.textContent = 'Hey, Im red'// Le a;ado texto
contentP.style.color = 'red'
container.appendChild(contentP)// Lo meto como hijo al div que he guardado en container

// <h3>
const contentHTres = document.createElement('h3')
contentHTres.classList.add('h3')
contentHTres.textContent = 'Hey, Im blue'
contentHTres.style.color = 'blue'
container.appendChild(contentHTres)

// a <div> with a black border and pink background color with the following elements inside of it:
const contentDiv = document.createElement('div')
contentDiv.style.border = 'black'
contentDiv.style.backgroundColor = "pink"
container.appendChild(contentDiv)

// another <h1> that says “I’m in a div”
const hChild = document.createElement('h3')
hChild.textContent = 'Im in a div'
contentDiv.appendChild(hChild)

// a <p> that says “ME TOO!”
const pChild = document.createElement('p')
pChild.textContent = 'ME TOO!'
contentDiv.appendChild(pChild)


// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
// nuevo div
const newDiv = document.createElement('div')
contentDiv.appendChild(newDiv)
newDiv.appendChild(pChild)
newDiv.appendChild(hChild)

//Opcion 2 boton 2
const boton2 = document.querySelector('#boton2')
boton2.onclick = () => alert("Hello World2"); // esto () => alert("Hello World2") es igual a una funcion 


//Opcion 3 boton 3
const boton3 = document.querySelector('#boton3')
boton3.addEventListener('click', function (e) {
    // console.log(e.target)
    // e.target.style.background = 'blue';
    alert("Hello world 3")
})

// Otra opcion es crear una funcion y utilizarla en las 3 formas
