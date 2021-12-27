import React from 'react'
import Announcement from '../components/Annoucement/Announcement';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import { Container } from './styles/Product.styles'

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product;
