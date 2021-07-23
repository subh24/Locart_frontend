import React from 'react'
import './categoryCard.css'

export default function categoryCard(props) {
    return (
    <div className="card category-card">
        <img src={process.env.REACT_APP_BASE_URL+props.category.image} className="card-img-top img-fluid" alt={props.category.name} id={props.category.name}></img>
        {/* <div className="card-body"> */}
        <p className="card-text category-card-text">{props.category.name}</p>
        {/* </div> */}
    </div>
    )
}
