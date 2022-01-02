import React from 'react'
import { Bottom, Container, Details, Image, Info, PriceDetail, Product, ProductDetail, ProductName, Summary, Title, Top, TopButton, TopText, TopTexts, Wrapper } from './styles/Cart.styles'
import Navbar from '../components/Navbar/Navbar';
import Announcement from '../components/Annoucement/Announcement';
import Footer from '../components/Footer/Footer';

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
                                    <ProductName></ProductName>
                                </Details>
                            </ProductDetail>
                            <PriceDetail></PriceDetail>
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
