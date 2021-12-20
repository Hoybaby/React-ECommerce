import React from 'react';
import {Container} from './Products.styles';

const Products = () => {
    return (
        <Container>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Products;
