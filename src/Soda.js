import React from 'react'; 
import { Link } from 'react-router-dom';

import "./Links.css"; 

const Soda = () => {
    return (
        <div>
            <h2>Soda</h2>
            <img src="https://media.giphy.com/media/3ofT5Lrb6V2vvGym9a/giphy.gif" alt="" />
            <Link className="Link" exact="true" to="/">Back</Link>
        </div>        
    )
}


export default Soda; 