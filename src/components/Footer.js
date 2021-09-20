import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"





const Footer = () => {
    return (
        <nav className="header">
        <div className="footer_text">
  
        <h1>footer</h1>
        </div>
        <Link to="/" className="footer_home_link">
        <div>
           <h3>home</h3>
        </div>
        </Link>
        
          </nav>

       
    )
}

export default Footer;





