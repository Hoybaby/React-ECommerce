import styled from 'styled-components';

export const Container = styled.div`


`;

export const Wrapper = styled.div`

    padding: 20px;
`;

export const Title = styled.h1`

    font-weight: 300;
    text-align: center;
`;

export const Top = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20ppx;
`;

export const TopButton = styled.button`

    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`;

export const TopTexts = styled.div``;

export const TopText= styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0 10px;
`;

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const Info = styled.div`
/* flex 3 makes it 3/4 of the page */
    flex:3;
    

`;

export const Summary = styled.div`
    flex:1;
    
`;

export const Product = styled.div``;

export const ProductDetail = styled.div``;

export const PriceDetail = styled.div``;

export const Image = styled.img``;

export const ProductName = styled.span``;

export const Details = styled.div``;