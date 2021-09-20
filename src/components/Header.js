import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from "./StateProvider";



function Header() {
 const [{basket}] = useStateValue();

    return (
        <nav className="header">
        <Link to="/">
            
          
               <img 
                className="header_logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLriegEsVvav_Vs4EF-Y74ZGLka-hawoOqkw&usqp=CAU"
                alt=""
                />
                
            </Link>
            <Link to ></Link>
            <div className="header_search">
            <input type="text" className="header_searchInput" />
            <SearchIcon className="header_searchIcon"/>


            </div>

           <div className="header_nav">
             
            <Link to="/login" className="header_link">
                <div className="header_option">

                     <span className="header_optionLineOne">hello</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>

            </Link>
            <Link to="/" className="header_link">
                <div className="header_option">

                     <span className="header_optionLineOne">Return</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>

            </Link>
            <Link to="/" className="header_link">
                <div className="header_option">

                     <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>

            </Link>

           <Link to="/checkout" className="header_link">
               <div className="header_optionBasket">
                 <ShoppingCartIcon fontSize="large"/>
                  {/* <span>{basket?.length}</span> */}
               </div>
           </Link>


           </div>
          </nav>

       
    )
}

export default Header;
