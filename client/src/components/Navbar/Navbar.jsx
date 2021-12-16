import React from 'react'
import { Container, Wrapper, Language, SearchContainer, Left, Center, Right } from './Navbar.styles';
import {Search} from '@material-ui/icons'

const Navbar = () => {
    return (
        
            <Container>
                <Wrapper>   
                    <Left> 
                        <Language> English</Language>
                        <SearchContainer>
                            input
                            <Search/>
                        </SearchContainer>
                    </Left>
                    <Center> Center </Center>
                    <Right> Right </Right>
                </Wrapper>
            </Container>
        
    )
}

export default Navbar
