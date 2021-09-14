import React from 'react'
import Product from "./Product";



function Items() {
    return (
   <div className="maindiv">
        <div className="home_row">
         <Product
               id="123"
               title="Naruto Manga All Volumes "
               price={11.45}
               rating={5}
               image="https://upload.wikimedia.org/wikipedia/en/thumb/9/94/NarutoCoverTankobon1.jpg/220px-NarutoCoverTankobon1.jpg "/>

         <Product
               id="123"
               title="Demon Slayer: Kimetsu no Yaiba, Vol. 20"
               price={11.45}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51X2W7A1NRL._SX331_BO1,204,203,200_.jpg"
                   />
    
        </div>
        <div className="home_row">
         <Product
               id="123"
               title="Attack on Titan  "
               price={11.45}
               rating={5}
               image="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/book/1/7/4/attack-on-titan-27-original-imafh38uaufnbm5s.jpeg?q=70 "/>

         <Product
               id="123"
               title="think like a monk "
               price={11.45}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"
           />
             <Product
               id="123"
               title="Haikyuu "
               price={11.45}
               rating={5}
               image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcK0GexsLia_xDprgKWb4tJDVUwhiyUevZ5OKmS4SKBqpQPcAqHXBS44jo5rben16CDYo&usqp=CAU"
           />
    
        </div>
        <div className="home_row">
         <Product
               id="123"
               title="Bunny Girl Senpai "
               price={11.45}
               rating={5}
               image=" "/>

        
    
        </div>

 

 
    </div>
    )
}

export default Items;

