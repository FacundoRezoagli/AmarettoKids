import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList";
import Data from "../../Data/productsData";
import { getProds } from "../../Data/productsData";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProds(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);
  // return (
  //   <div className="itemListContainerContainer">
  //     <ItemList products={products} />
  //   </div>
  // );
  return (
    <div className="item-list-container">
        {loading ? (
            <h2>Cargando...</h2>
        ) : (
            <>
                <ItemList products={products} />
            </>
        )}
    </div>
);
};

export default ItemListContainer;
