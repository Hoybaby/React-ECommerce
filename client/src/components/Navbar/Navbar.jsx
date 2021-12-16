import React from 'react'
import { Container, Wrapper, Language, SearchContainer, Input, Left, Center, Right } from './Navbar.styles';
import {Search} from '@material-ui/icons'

const Navbar = () => {
    return (
        
            <Container>
                <Wrapper>   
                    <Left> 
                        <Language> English</Language>
                        <SearchContainer>
                            <Input/>
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
