import React from 'react'

function ApprovedCards(props) {
   
    return (
        <div className="ui card">
            <div className="content">{props.children}</div>
            <div className="extra content">

            <div className="ui two buttons">
                <div className="ui basic greem button">Apporved</div>
                <div className="ui basic red button">Reject</div>
            </div>
            </div>
        </div>
    )
}


    

export default ApprovedCards
