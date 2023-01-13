/*import {useEffect,useState} from "react";
import axios from "axios";
const useGetProducts = (API) => {
    const [products,setProducts] = useState([]);
	useEffect(async() => {
		const response = await axios(API);
		setProducts(response.data);
	},[]);
    return products;
}
export default useGetProducts;
*/


import { useEffect, useState } from "react";
const useGetProducts = (API) => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(API)
          .then(response => response.json())
          .then(data => setOrder(data));
      }, []);
    return order;
}
export default useGetProducts;


