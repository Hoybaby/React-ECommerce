import { Send } from '@material-ui/icons';
import React from 'react'
import { Container, Description, InputContainer, Input, Button, Title } from './Newsletter.styles';

const Newsletter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>
                Get timely updates from your favorite products
            </Description>
            <InputContainer>    
                <Input placeholder="Your Email"/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter;


