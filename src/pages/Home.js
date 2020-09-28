import React from 'react'
import './styles/Home.css'
import confLogo from '../images/platziconf-logo.svg'
import Astronauts from '../images/astronauts.svg'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className="home__container">
            <div className="details__container">
                <img src={confLogo} alt=""/>
                <h1>Badge Management System</h1>
                <h4>The easiest way to manage your conference</h4>
                <Link to="/badges" className="btn btn-primary">Start now</Link>
            </div>
            <div className="image__container">
                <img src={Astronauts} alt=""/>
            </div>
        </div>
    )
}

export default Home