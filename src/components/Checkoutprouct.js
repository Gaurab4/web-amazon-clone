import React from 'react'


function Checkoutprouct(id, title,image,price,rating) {
    return (
        <div className="checkoutproduct">

        <img src={image} alt=""/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title" >{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_) => (
                    <p>⭐</p>
                ))}
            </div>

            <button >Remove from basket</button> 
            
        </div>
     </div>
    )
}

export default Checkoutprouct
