
import { Add, Remove } from '@material-ui/icons';
import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Annoucement/Announcement';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import { Container, Filter, FilterContainer, Wrapper, ImgContainer, Image, InfoContainer, 
    Description, Title, Price, FilterSizeOption, FilterTitle, FilterSize, FilterColor, 
    AddContainer, AmountContainer, Amount, Button 
} from './styles/Product.styles'

import {publicRequest} from '../requestMethods';
// have to take in the props from the ProductList.jsx

const Product = () => {

    const location = useLocation();

    // this category component will be passed as a prop later to tell the products component what category to display  
    const id = location.pathname.split('/')[2];

    const [product , setProduct] = useState({});

    useEffect(( ) => {

        const getProduct = async() => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {

            }

        }
        getProduct();
        // when id changes, it will invoke the datta
    }, [id])

    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                {/* imate of jeans before https://i.ibb.co/S6qMxwr/jean.jpg */}
                    <Image src={product.img}  />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged. </Description>
                    <Price> $20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product;
