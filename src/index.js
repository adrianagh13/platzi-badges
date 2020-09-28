import React from 'react'
import ReactDOM from 'react-dom' 
import 'bootstrap/dist/css/bootstrap.css' //importamos los estilos de bootstrap

import './global.css'
import App from './components/App'

const container = document.getElementById('app')

// ReactDOM.render(<Badge //uso de props 
//     avatarUrl="https://s.gravatar.com/avatar/7fe4dd1c42563678b98d86bb329c316a?s=80"  
//     firstName="Adri"
//     lastName="Gomez"
//     jobTitle="Kickass Developer and Data Scientist"
//     twitter="adriannggh"
// />,container)

//el método para renderizar, indica el componente que se estará mostrando en pantalla
ReactDOM.render(<App />, container)