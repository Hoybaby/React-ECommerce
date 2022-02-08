import React from 'react'
import { Container, Wrapper, Language, SearchContainer, Input, Left, Center, Right, Logo, MenuItem } from './Navbar.styles';
import {Search, ShoppingCartOutlined} from '@material-ui/icons';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';



const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

    console.log(quantity)

    return (
        
            <Container>
                <Wrapper>   
                    <Left> 
                        <Language> En</Language>
                        <SearchContainer>
                            <Input placeholder="Search"/>
                            <Search style={{color: "gray", fontSize: "16px"}}/>
                        </SearchContainer>
                    </Left>
                    <Center> 
                        <Logo> Hoy. </Logo>
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
