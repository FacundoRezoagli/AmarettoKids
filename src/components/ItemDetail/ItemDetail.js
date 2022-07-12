import {React, useState} from 'react'
import './ItemDetail.css'
import { useParams } from "react-router-dom";
import Data from "../../Data/productsData";
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = () => {
  const { productId } = useParams();
  const [btnClick, setBtnClick] = useState(1);
  const item = Data.find((elemento) => elemento.cod.toString() === productId)
  const handleClickPlus = () => {
    if (btnClick >= item.stock) {
      return;
    }
    setBtnClick(btnClick + 1);
  };

  const handleClickMinus = () => {
    if (btnClick === 0 ) {
      return;
    }
    setBtnClick(btnClick - 1);
  };
  const onAdd = (btnClick) => {
    if (btnClick === 0) {
      return;
    } else {
      //AGREGAR AL CARRIRIJILLO
      console.log("Agregar " + btnClick + " al carro")
    }
  };
  return (
    <div className='ItemDetail'>
        <h1>{item.nombre}</h1>
        <img className='img' src={item.imagen} alt={item.nombre}></img>
        <ItemCount 
        stock = {item.stock}
        onAdd = {onAdd}
        handleClickMinus = {handleClickMinus}
        handleClickPlus = {handleClickPlus}
        />
        <p>{item.itemDetail}</p>
    </div>
  )
}

export default ItemDetail