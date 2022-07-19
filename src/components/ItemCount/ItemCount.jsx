import {React, useState} from "react";
import "./ItemCount.css";

export default function ItemCount({
  btnClick,
  stock,
  onAdd,
  handleClickMinus,
  handleClickPlus,
}) {
  const [contador, setContador] = useState(0);

    const count = (value) => {
        const result = contador + value
        if(result<=stock && result >= 0){
            setContador(contador + value)
        };
        (value>0)? handleClickPlus() : handleClickMinus()
    };

  return (
    <div className="itemDisplay">
                <h1 className="itemStock">{contador} / {stock}</h1>
                <div className="itemButtons">
                 <button className="amountButton"  onClick={() => count(-1)}>-</button>  
                <button className="cartAddButton" onClick={() => onAdd(btnClick)} > Agregar al carrito</button>
                <button className="amountButton" onClick={() => count(1)}>+</button>
                </div>
                
            </div>
  );
}