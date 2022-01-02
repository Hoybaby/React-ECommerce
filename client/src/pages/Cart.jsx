import React from 'react'
import { Bottom, Container, Details, Image, Info, PriceDetail, Product, ProductAmountContainer, ProductColor, ProductDetail, ProductId, ProductName, ProductSize, Summary, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './styles/Cart.styles'
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Annoucement/Announcement';
import Footer from '../components/Footer/Footer';
import { Add, Remove } from '@material-ui/icons';

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement />
            <Wrapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton> 
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName><b>Product:</b> Sky High Shoes</ProductName>
                                    <ProductId><b>ID:</b> 321562964 </ProductId>
                                    <ProductColor color ="black"/>
                                    <ProductSize><b>Size:</b> 10</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> $30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        summary
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
