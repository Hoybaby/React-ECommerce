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
                // this is the url that we are going to hit if there is a specific category if not, just retrieve all products
                const res = await axios.get( category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products'); 
                setProducts(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        // when the category changes, we need to filter the products  
        getProducts();
    }, [category])
    
    // now i want the products to be filtered by the filters
    useEffect(()=> {
        // if there is a category set filter products to a certain way
        category && setFilteredProducts(
            // we will take each item and see if they include those filters or not. going to chose our filter and look at each key and value like color and sizes then match to product items
            products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
        )

    } , [products, category, filters])


    return (
        <Container>
            {filteredProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products;
