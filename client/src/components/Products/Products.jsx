import React, {useState} from 'react';
import {Container} from './Products.styles';
import { popularProducts } from "../../data/data";
import Product from '../Product/Product';
import { useEffect } from 'react';
import axios from 'axios';


const Products = ({category, sort, filters}) => {

    // console.log('test');
    const [products, setProducts] = useState([]);


    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=> {

        const getProducts = async() => {
            try {
                const res = await axios.get("http://localhost:5000/api/products?category=coat");
                console.log(res)

            } catch (error) {
                console.log(error);
            }
        }
        // when the category changes, we need to filter the products  
        getProducts();
    }, [category])


    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products;
