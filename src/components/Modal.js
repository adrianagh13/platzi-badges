import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal (props){ //cuando un componente lo declaramos como fn es porque NO va a manejar estados, a diferencia de una clase 
    if(!props.isOpen){
        return null
    }
    return(
        ReactDOM.createPortal(
            <div className="Modal">
                <div className="Modal__container">
                    <button onClick={props.onClose} className="Modal__close-button"> X </button>
                    {props.children} 
                </div>
            </div>
            , document.getElementById('modal')
        )
    )
}
//añadimos props.childrem debido a que se hace uso de los props de Modal, del propio componente
//con props.children Modal reconoce a sus hijos, es decir, al contenido que está entre las etiquetas del elemento

//El contenido del modal viene siempre de sus children, esto crea una versión genérica
//El DeleteBadgeModal es una versión específica

export default Modal