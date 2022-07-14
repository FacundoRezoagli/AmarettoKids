import React from "react";
import Item from "../Item/Item";

import './ItemList.css'
export const ItemList = ({products}) => {
  return (
    <div className="itemListContainer">

      {products.map((product) => (
        <Item url = {product.imagen} stock = {product.stock} producto = {product.nombre} cod = {product.cod}/>
      ))}

    </div>
  );
};
export default ItemList;



/* 
import img1 from '../../assets/Img/img1.jpg'
import img2 from '../../assets/Img/img2.jpg'
import img3 from '../../assets/Img/img3.jpg'
<Item url = {img1} stock = {10} producto = {'Buzo Llamas'} />
<Item url = {img2} stock = {10} producto = {'Camperon Azul'}/>
<Item url = {img3} stock = {10} producto = {'Gorro/Bufanda'}/> 
*/
