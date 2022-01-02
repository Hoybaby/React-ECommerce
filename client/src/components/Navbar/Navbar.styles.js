import styled from 'styled-components';

import { mobile } from '../../responsive';


export const Container = styled.div`
    height: 60px;
    /* background-color: black; */
    ${mobile({backgroundColor: "red"})};
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
`

export const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

export const Input = styled.input`
border: none;

`
export const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
// --------------------------------------------------Center-----------------------------------------------------
export const Center = styled.div`
    flex: 1;
    text-align: center;
`

export const Logo = styled.h1`
    font-weight: bold;
`

// ----------------------------------------------------Right-----------------------------------------------------
export const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`