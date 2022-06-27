import {React, useState }from "react";
import "./ItemCount.css";

const ItemCount = ({stock , url, producto}) => {

    const [contador, setContador] = useState(0);

    const count = (value) => {
        const result = contador + value
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    return(
        <div >

            <h1>{producto}</h1>
            
            <img className="item" src={url} alt={producto}/>

            <div className="container">

                <h1 className="display">{contador} / {stock}</h1>
                <button className="btn2"  onClick={() => count(-1)}>-</button>
                
                <button className="btn2" onClick={() => count(+1)}>+</button>
                

            </div><button className="btn"> Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;