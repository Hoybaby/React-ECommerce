import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

import { Center, Container, Description, Left, List, ListItem, Logo, Right, SocialContainer, SocialIcon, Title } from './Footer.styles';

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Hoybaby's Shop</Logo>
                
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title> Useful Links </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    
                </List>
            </Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
