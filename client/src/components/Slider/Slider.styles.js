import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5s;
    `

export const Wrapper = styled.div`
    height: 100% ;
`

export const Slide  = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;


`
export const ImgContainer  = styled.div`
    height: 100%;
    flex: 1;

`
export const Image = styled.img`

    height: 80%;
`

export const InfoContainer  = styled.div`

    flex: 1;
    padding: 50px;

`

export const Title = styled.h1`


`
export const Description = styled.h1`


`

export const Button = styled.h1`


`