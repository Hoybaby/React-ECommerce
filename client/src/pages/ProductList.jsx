import React from 'react';
import {Container} from './ProductList.styles';
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Annoucement/Announcement';

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
        </Container>
    )
}

export default ProductList;
