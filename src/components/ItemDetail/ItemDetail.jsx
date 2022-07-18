import {React, useState, useContext} from 'react'
import { Shop } from "../ShopProvider/ShopProvider";
import './ItemDetail.css'
import { useParams } from "react-router-dom";
import Data from "../../Data/productsData";
import ItemCount from '../ItemCount/ItemCount';
import ProductCard from '../ProductCard/ProductCard';

const ItemDetail = ({product}) => {

  const { estadoA,addItem } = useContext(Shop);

  const { productId } = useParams();

  const [btnClick, setBtnClick] = useState(0);

  const item = Data.find((elemento) => elemento.id.toString() === productId)

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
      alert( "se agregaron : "+`${btnClick}`+"  productos de tipo " +`${item.nombre}` );
      addItem(parseInt(estadoA)  + parseInt(btnClick));
      console.log(parseInt(estadoA) + parseInt(btnClick))
      console.log(btnClick)
    }
  };
console.log(product)
  return (
    <div className='ItemDetail'>
        {/* <h1>{item.title}</h1>
        <img className='img' src={item.image} alt={item.title}></img>
        <ItemCount 
        btnClick = {btnClick}
        stock = {item.stock}
        onAdd = {onAdd}
        handleClickMinus = {handleClickMinus}
        handleClickPlus = {handleClickPlus}
        />
        <p className='description'>{item.description}</p> 
        {console.log(product)}
        
*/}<ProductCard product = {product}></ProductCard>
    </div>
  )
}

export default ItemDetail