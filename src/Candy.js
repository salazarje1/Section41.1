import React from 'react'; 
import { Link } from 'react-router-dom';

import "./Links.css"; 

const Candy = () => {
    return (
        <div>
            <h2>Candy</h2>
            <img src="https://media.giphy.com/media/jigOKdGnB4xd6/giphy.gif" alt="" />
            <Link className="Link" exact="true" to="/">Back</Link>
        </div>        
    )
}


export default Candy; 