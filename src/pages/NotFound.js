import React from 'react'
import './styles/NotFound.css'
import { Link } from 'react-router-dom'
import Astronaut from '../images/error.png'

function NotFound(){
    return(
        <div className="notFound__container">
            <div className="notFound__details">
                <h1>404 : Not Found</h1>
                <p>Ooops! The page you were looking for was not found</p>                        
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>
            <div className="notFound__image">
                <img src={Astronaut} alt=""/>
            </div>
        </div>
    )
}

export default NotFound