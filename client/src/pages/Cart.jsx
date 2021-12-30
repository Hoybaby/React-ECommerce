import React from 'react'
import { Bottom, Container, Title, Top, TopButton, Wrapper } from './styles/Cart.styles'
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
                    <TopButton>Checkout Now</TopButton> 
                </Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
