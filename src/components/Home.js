import React from 'react'
import "./Home.css"
import Items from './Items';
import Backimage from './Backimage';



function Home() {
    return (
        <div className="home">
        <Backimage/>
        <Items/>
        </div>
    )
}

export default Home;
