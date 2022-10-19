import React from 'react'; 
import { Link } from 'react-router-dom';

import "./Links.css"; 

const Chips = () => {
    return (
        <div>
            <h2>Chips</h2>
            <img src="https://media.giphy.com/media/XohD9O4xwnhvi/giphy-downsized-large.gif" alt="" />
            <Link className="Link" exact="true" to="/">Back</Link>
        </div>        
    )
}


export default Chips; 