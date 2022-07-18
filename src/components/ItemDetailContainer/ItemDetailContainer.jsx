import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProd } from "../../Data/productsData";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProd(productId)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <div>
      <ItemDetail product={product}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
