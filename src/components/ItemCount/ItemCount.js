import {React, useState} from "react";
import "./ItemCount.css";

export default function ItemCount({
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
    // <div className="itemDisplay">
    //   <div className="Contador">
    //     {stock === "0" ? null : (
    //       <button className="amountButton" props={{ onClick: () => handleClickMinus() }}>
    //         -
    //       </button>
    //     )}

    //     {stock === "0" ? (
    //       <div className="totalActual"> SIN STOCK</div>
    //     ) : (
    //       <div className="totalActual"> {inicial}</div>
    //     )}
    //     {stock === "0" ? null : (
    //       <button className="amountButton" props={{ onClick: () => handleClickPlus() }}>
    //         +
    //       </button>
    //     )}
    //   </div>
    //   {stock === "0" ? null : (
    //     <button className="cartAddButton" onClick={() => Cargado(inicial)}>
    //       agregar 🛒
    //     </button>
    //   )}
    // </div>
    <div className="itemDisplay">
                <h1 className="itemStock">{contador} / {stock}</h1>
                <div className="itemButtons">
                <button className="amountButton"  onClick={() => count(-1)}>-</button>               
                <button className="amountButton" onClick={() => count(1)}>+</button>
                <button className="cartAddButton" onClick={() => onAdd()} > Agregar al carrito</button>
                </div>
            </div>
  );
}