import React from 'react'
import FullScreenIcon from './../../icons/components/full-screen'
import './full-screen.css'

const FullScreen = props => {
    return (
        <div 
            className="FullScreen"
            onClick={props.handleFullScreen}
        >
            <FullScreenIcon 
                size={25}
                color="white"
            />
        </div>
    )   
}

export default FullScreen;
