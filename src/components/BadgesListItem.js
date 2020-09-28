import React from 'react'
import Gravatar from './Gravatar'
import twitter from '../images/twitter.png'
import './styles/BadgesListItem.css'

class BadgesListItem extends React.Component {
    render(){
        return(
            <div className="BadgesListItem">
                <div className="img__container">
                    <Gravatar email={this.props.badge.email} alt=""/>
                </div>
                <div>
                    <div className="font-weight-bold"> 
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </div>
                    <div className="text-primary">
                        <img className="twitter" src={twitter} alt=""/>
                        @{this.props.badge.twitter}
                    </div>
                    {this.props.badge.jobTitle}
                </div>
            </div>
        )
    }
}

export default BadgesListItem