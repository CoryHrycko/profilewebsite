import React from 'react'
import Series from '../../../containers/Series/index'
import './index.css'


const BodyContainer3 = props => (
    <div className ="pageTwo">
        <div className ="row">
            <div className ="col-sm-6 text-center">
                <h2> This is where the main discord stats are going to show
                </h2>
                <p>
                    <Series />
                </p>
                <div className ="col-sm-6">
                <img className="me" src="https://images.unsplash.com/photo-1486365227551-f3f90034a57c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ba17862e55c497c27a191168d0f610a3&auto=format&fit=crop&w=1050&q=80"/> 
                </div>
            </div>
        </div>
    </div>
);

export default BodyContainer3