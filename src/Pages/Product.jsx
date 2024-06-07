import React, { useContext } from 'react';
import ShopContext from "../Context/shopcontext";
import { useParams } from 'react-router-dom';
import  Breadcrumb  from '../Components/Breadcrumb/Breadcrumb';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
  console.log(ShopContext);
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((element) => element.id === Number(productId));
  return (
    <>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
    </>
  )
}

export default Product;