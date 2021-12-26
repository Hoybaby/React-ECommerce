import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';

import { Center, ContactItem, Container, Description, Left, List, ListItem, Logo, Payment, Right, SocialContainer, SocialIcon, Title } from './Footer.styles';

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
            <Right>
                <Title> Contact </Title>
                <ContactItem> <Room style={{marginRight: "10px"}}/> New York, United States</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/> +1 234 567 7890</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/> mbartek436@gmail.com</ContactItem>
                <ContactItem></ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
