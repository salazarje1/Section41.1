import React from 'react'; 
import { Link } from 'react-router-dom';

import './VendingLinks.css'; 


const VendingLinks = () => {
    return (
        <nav className='VendingLinks'>
            <Link className="VendingLinks-link" exact to="/soda ">Soda</Link>
            <Link className="VendingLinks-link" exact to="/chips">Chips</Link>
            <Link className="VendingLinks-link" exact to="/candy">Candy</Link>
        </nav>
    )
}

export default VendingLinks; 