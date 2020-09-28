// Creando un texto con Vanilla JS
// const element = document.createElement('h1')
// element.innerHTML = 'Helloooooo'

// const container = document.getElementById('app')

// container.appendChild(element)

import React from 'react' //análogo a createElement
import ReactDOM from 'react-dom' //análogo a appendChild

//JSX
// const jsx = <h1>Helloooooo from REACT</h1> 

//Lo que está dentro de llaves son expresiones que se pueden evaluar, variables, funciones, calculos, etc
const name = 'adri'
// const jsx = <h1>Hola soy {name}</h1>

const sum = () => {
   return 3 + 3;
}
// const jsx = <h1>La suma de 3+3 es {sum()}</h1>

const jsx = <div>
    <h1>Hola soy Adri</h1>
    <p>Ing en Sistemas</p>
</div>

//React.createElement
// const element = React.createElement(
//     'a', 
//     { href: 'https://platzi.com'},
//     'Ir a platzi'
// )

const element = React.createElement(
    'div', 
    {},
    React.createElement('h1', {}, 'Hola soy Adriiii'),
    React.createElement('p', {}, 'Soy ing en Sistemas')
)

const container = document.getElementById('app')

//ReactDOM.render(___qué___,___dónde____)
ReactDOM.render(element,container) //ReactDOM - appendChild
