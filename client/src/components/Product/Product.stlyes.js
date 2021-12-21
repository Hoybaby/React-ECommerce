
import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    
`
// circle component is for the image to fit
export const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
export const Image = styled.img`
    height: 75%;
    /* make it behind the image */
    z-index: 2;
`
export const Info = styled.div`
    
`
export const Icon = styled.div`
    
`
