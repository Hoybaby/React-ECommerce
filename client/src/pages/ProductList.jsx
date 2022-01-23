import React, {useState} from 'react';
import {Container, Filter, FilterContainer, FilterText, Option, Title, Select} from './styles/ProductList.styles';
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Annoucement/Announcement';
import Products from '../components/Products/Products';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
import {useLocation} from 'react-router-dom'

const ProductList = () => {

    const location = useLocation();

    // this category component will be passed as a prop later to tell the products component what category to display  
    const category = location.pathname.split('/')[2];

    const [ filters, setFilters] =useState({})
    const [ sort, setSort] =useState("newest");

    const handleFilters = (e) => {
        // this is selecteing what is being selected
        const value = e.target.value;
        setFilters({
            // takes the event and assign it to value
            ...filters,
            [e.target.name]: value
        });
    }
    
    // console.log(filters)

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select name="color" onChange={handleFilters} >
                        <Option disabled >Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled >Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select onChange={e=> setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                        
                        
                    </Select>
                </Filter>
            </FilterContainer>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter/>
            <Footer/>

            
        </Container>
    )
}

export default ProductList;
