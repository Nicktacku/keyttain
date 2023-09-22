import React from 'react'

const Card = ({title, subtitle, imgSrc}) => {
    return (
        <div className="card mb-5" style={{width: 200}}>
            <div className="card-body">
                <img src={imgSrc} className="card-img-top" alt={title}/>
                <h5 className="card-title mb-2 ">{title}</h5>
                <p className="card-text">{subtitle}</p>
            </div>
        </div>
     );
}

export default Card;