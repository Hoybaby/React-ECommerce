import React from 'react'
import { Container, Wrapper, Language, SearchContainer, Input, Left, Center, Right, Logo, MenuItem } from './Navbar.styles';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';



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
                    <Center> 
                        <Logo> Hoybaby's Shop </Logo>
                    </Center>
                    <Right> 
                        <MenuItem>Register</MenuItem>
                        <MenuItem>Sign-In</MenuItem>
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined/>
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
        
    )
}

export default Navbar
