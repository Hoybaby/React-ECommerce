
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

import axios from 'axios';

import {publicRequest} from '../requestMethods';
// have to take in the props from the ProductList.jsx

const Product = () => {

    const location = useLocation();

    // this category component will be passed as a prop later to tell the products component what category to display  
    const id = location.pathname.split('/')[2];

    const [product , setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);

    const [size, setSize] = useState('');

    const [color, setColor] = useState('');

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

    const handleQuantity = (type) => {
        if(type === 'dec') {
            // this makes sure it cant go lower than 1
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        // update cart
        // axios.post
    }

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
                    <Title>{product.title}</Title>
                    <Description>{product.desc}</Description>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"  onClick={() => setColor("black")}/>
                            <FilterColor color="darkblue" onClick={() => setColor("darkblue")}/>
                            <FilterColor color="gray" onClick={() => setColor("gray")}/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}>
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
                            <Remove onClick={() => handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product;
