import React, {useState}  from 'react'
import './ItemDetail.css'
import { useParams } from "react-router-dom";
import Data from "../../Data/productsData";

const ItemDetail = () => {
  const { productId } = useParams();
  const item = Data.find((elemento) => elemento.cod.toString() === productId)
  console.log(item)
  return (
    <div className='ItemDetail'>
        <h1>{item.nombre}</h1>
        <img className='img' src={item.imagen}></img>
        <p>{item.itemDetail}</p>
    </div>
  )
}

export default ItemDetail