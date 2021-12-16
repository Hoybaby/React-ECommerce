import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { Container, Arrow, Wrapper, ImgContainer, InfoContainer, Slide, Image, Title, Description, Button } from './Slider.styles'

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide> 
                    <ImgContainer>
                        <Image src="https://picjumbo.com/wp-content/uploads/girl-fashion-pose-with-gray-watches-and-suede-jacket-2-1080x720.jpg" alt="picture of woman" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Winter Sale</Title>
                        <Description>DON"T COMPROMISE ON STYLE! GET A FLAT 30% OFF ON NEW ARRIVALS.</Description>
                        <Button></Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
