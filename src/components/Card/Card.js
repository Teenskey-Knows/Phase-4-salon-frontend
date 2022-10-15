import React from "react";


function Card({ title, body }) {
    return <div className="styled-card">
        <h3>{title}</h3>
        <p>{body}</p>        
    </div>

}

export default Card;
