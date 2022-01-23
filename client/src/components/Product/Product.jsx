import React from 'react';
import { Container, Circle, Icon, Info, Image } from './Product.stlyes';
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
