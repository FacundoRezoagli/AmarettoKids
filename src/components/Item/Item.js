import {React, useState }from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({stock , url, producto, cod}) => {

    const [contador, setContador] = useState(0);

    const count = (value) => {
        const result = contador + value
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
    };

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate('/detail/' + cod)
    }
    return(
        <div className="itemContainer" >

            <h1 className="itemTitle">{producto}</h1>
            
            <img className="itemImage" src={url} alt={producto}/>

            <div className="itemDisplay">
            <button className="itemDetailButton" onClick={handleDetail} >Ver detalle del producto</button> 
                <h1 className="itemStock">{contador} / {stock}</h1>
                <div className="itemButtons">
                    <button className="amountButton"  onClick={() => count(-1)}>-</button>               
                    <button className="amountButton" onClick={() => count(+1)}>+</button>
                    <button className="cartAddButton"> Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default Item;


