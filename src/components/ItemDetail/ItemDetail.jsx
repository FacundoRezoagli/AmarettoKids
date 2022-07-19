import { React, useState, useContext } from "react";
import { Shop } from "../ShopProvider/ShopProvider";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import Data from "../../Data/productsData";
import ItemCount from "../ItemCount/ItemCount";
import ProductCard from "../ProductCard/ProductCard";

const ItemDetail = ({ product }) => {
  const { estadoA, addItem } = useContext(Shop);

  const { productId } = useParams();

  const [btnClick, setBtnClick] = useState(0);

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

  const onAdd = (btnClick) => {
    if (btnClick === 0) {
      return;
    } else {
      //AGREGAR AL CARRIRIJILLO
      alert(
        "se agregaron : " +
          `${btnClick}` +
          "  productos de tipo " +
          `${product.nombre}`
      );
      addItem(parseInt(estadoA) + parseInt(btnClick));
      console.log(parseInt(estadoA) + parseInt(btnClick));
      console.log(btnClick);
      setBtnClick(0);
    }
  };
  return (
    <div className="ItemDetail">
      <ProductCard product={product}></ProductCard>
      <ItemCount
        btnClick={btnClick}
        stock={product.stock}
        onAdd={onAdd}
        handleClickMinus={handleClickMinus}
        handleClickPlus={handleClickPlus}
      />
    </div>
  );
};

export default ItemDetail;
