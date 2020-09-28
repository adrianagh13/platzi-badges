import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'

function BadgeDetails (props){
    const badge = props.badge //de este modo accedemos al prop badge, que es igual al estado del BadgeDetailsContainer
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt=""/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName = {badge.firstName}
                            lastName = {badge.lastName}
                            jobTitle = {badge.jobTitle}
                            twitter = {badge.twitter}
                            email = {badge.email}
                        />
                    </div>

                    <div className="col">
                        <h2>Options</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to ={`/badges/${badge.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="bnt btn-danger">Delete</button >
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal} 
                                    onDeleteBadge={props.onDeleteBadge}
                                /> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default BadgeDetails