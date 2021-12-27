import React from 'react';
import {Container, Filter, FilterContainer, FilterText, Title} from './ProductList.styles';
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Annoucement/Announcement';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';

const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>

            
        </Container>
    )
}

export default ProductList;
