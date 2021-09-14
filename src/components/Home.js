import React from 'react'
import "./Home.css"
import Items from './Items';



function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
             src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt="" />
        <Items/>
        </div>
    )
}

export default Home;
