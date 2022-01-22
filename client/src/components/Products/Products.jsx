import React, {useState} from 'react';
import {Container} from './Products.styles';
import { popularProducts } from "../../data/data";
import Product from '../Product/Product';
import { useEffect } from 'react';


const Products = ({category, sort, filters}) => {

    const [products, setProducts] = useState([]);


    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(()=> {

        // when the category changes, we need to filter the products
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
