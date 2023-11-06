import React from "react";
import OneProduct from "./OneProduct";
import axios from "axios";
import "../App.css";
import { useState, useEffect } from "react";
const ProductsPage = ({token}) =>{
    const [products, setProducts]= useState();
    useEffect(()=>{
        if(products==null){
               axios.get("api/products").then((res)=>{
        console.log(res.data);
        setProducts(res.data.data);
    })
        }
    }, [products]);
return (
<div className="product-container">
   
 {products==null ? <></> : products.map((product)=>(

<OneProduct product = {product} key={product.id} />

 ))}
</div>
);
};
export default ProductsPage;