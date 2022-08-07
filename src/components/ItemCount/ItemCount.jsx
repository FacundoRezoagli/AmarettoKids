import { React, useState, useEffect } from "react";
import "./ItemCount.css";
import { useNavigate } from "react-router-dom";







export default function ItemCount({
  btnClick,
  stock,
  onAdd,
  handleClickMinus,
  handleClickPlus,
  product,
}) {
  const navigate = useNavigate();

  const [contador, setContador] = useState(1);

  const count = (value) => {
    const result = contador + value;
    if (result <= stock && result >= 1) {
      setContador(contador + value);
    }
    value > 0 ? handleClickPlus() : handleClickMinus();
  };

  // console.log(product);
  // console.log(btnClick);

  useEffect(() => {}, [btnClick]);

  const cartAddButton = () => {
    onAdd(contador, product);
    setContador(1);
  };

  return (
    <div className="itemDisplay">
      <h1 className="itemStock">
        {contador} / {stock}
      </h1>
      <div className="itemButtons">
        <button className="amountButton" onClick={() => count(-1)}>
          -
        </button>
        <button className="cartAddButton" onClick={() => cartAddButton()}>
          Agregar al carrito
        </button>
        <button className="amountButton" onClick={() => count(1)}>
          +
        </button>
        
      </div>
      <button className="cartAddButton2" onClick={() => navigate("/cart")}>
          Ir al carrito
        </button>
    </div>
  );
}
