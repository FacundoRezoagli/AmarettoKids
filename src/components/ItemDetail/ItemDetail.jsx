import { React, useState, useContext  } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import ProductCardDetail from "../ProductCardDetail/ProductCardDetail";

import { Shop } from "../ShopProvider/ShopProvider";
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({ product }) => {
  const { estadoA, addItem } = useContext(Shop);

  const [btnClick, setBtnClick] = useState(0);

  const { addToCart } = useContext(CartContext);

  const handleClickPlus = () => {
    if (btnClick >= product.stock) {
      return;
    }
    setBtnClick(btnClick + 1);
  };

  const handleClickMinus = () => {
    if (btnClick === 0) {
      return;
    }
    setBtnClick(btnClick - 1);
  };

  const onAdd = (btnClick, product) => {
    if (btnClick === 0) {
      return;
    } else {
      //AGREGAR AL CARRIRIJILLO
      alert(
        "se agregaron : " +
          `${btnClick}` +
          "  productos de tipo " +
          `${product.title}`
      );
      addItem(parseInt(estadoA) + parseInt(btnClick));
      setBtnClick(0);
      addToCart(product,btnClick)
    }
  };

  console.log(product)
  return (
    <div className="ItemDetail">
      <ProductCardDetail product={product}></ProductCardDetail>
      <ItemCount
        btnClick={btnClick}
        stock={product.stock}
        onAdd={onAdd}
        handleClickMinus={handleClickMinus}
        handleClickPlus={handleClickPlus}
        product={product}
      />
    </div>
  );
};

export default ItemDetail;
