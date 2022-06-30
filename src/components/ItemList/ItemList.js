import React, {useEffect, useState} from "react";
import Item from "../Item/Item";
import img1 from '../../assets/Img/img1.jpg'
import img2 from '../../assets/Img/img2.jpg'
import img3 from '../../assets/Img/img3.jpg'
import './ItemList.css'
export const ItemList = ({numero}) => {
  
const [products, setProducts] = useState(null)

useEffect
(
  () => 
  {
    const getProducts = async() => 
    {
      try
      {
        const response = await fetch('/Mocks/productsData.json')
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      catch(error)
      {
        console.log("Hubo un error:")
        console.log(error)
      }
    }

    getProducts()
  }, []
)
  return (
    <div className="itemListContainer">
      <Item url = {img1} stock = {10} producto = {'Buzo Llamas'} />
      <Item url = {img2} stock = {10} producto = {'Camperon Azul'}/>
      <Item url = {img3} stock = {10} producto = {'Gorro/Bufanda'}/>
    </div>
  );
};
export default ItemList;
