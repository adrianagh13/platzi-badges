import React from 'react'

import Navbar from './Navbar'

function Layout(props) {
    // const children = props.children
    return(
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout
//Layout tiene la función de representar a Navbar como un contenedor de las demás páginas, es por eso que en App
//Posicionamos los demás componentes dentro de Layout
//Aquí indicamos que esos componentes son sus hijos mediante props.children 
//Primero colocamos Navbar pues esa es su función principal, representar a este componente como "contenedor" de los otros
//Y de ese modo podemos borrar la importación del Navbar en BadgeNew y Badge para evitar que se repita
//Y así indicar que Layout es el contenedor de las otras páginas
