import React from "react";
import './Cardbody.css';

export const Cardtemplate = ({image, location, terminus, onclick}) => {
    const measurement  = "400px"

    return(
        
            <div className='card bg-light border-0' style={{width: `${measurement}`,
        height: `${measurement}`}} onClick={onclick}>
            <img className='card-img-top' src={image} alt={terminus}/> 
            <div className='card-body'>
                <h4 className="card-title">{location}</h4>
                <p className="card-text">{terminus}</p>
            </div>
            </div>
        
    )
}

//handletoggle is to be used in the cardbody component