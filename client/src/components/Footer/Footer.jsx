import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import React from 'react';

import { Container, Description, Left, Logo, SocialContainer, SocialIcon } from './Footer.styles';

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
        </Container>
    )
}

export default Footer
