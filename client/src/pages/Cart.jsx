import React from 'react'
import { Bot, Container, Title, Top, Wrapper } from './styles/Cart.styles'
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
                <Top></Top>
                <Bot></Bot>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart;
