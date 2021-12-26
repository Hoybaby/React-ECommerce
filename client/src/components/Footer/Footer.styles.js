import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    

`;
// -------------------------------------------left-------------------------------------------
export const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Logo = styled.h1`

`;

export const Description = styled.pattern`
    margin: 20px 0;

    `;

export const SocialContainer = styled.div`
    display: flex;
`;

export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

// -----------------------------------------center--------------------------

export const Center = styled.div`
    flex:1;
    padding: 20px;
`;

export const Title = styled.h3`
    margin-bottom: 30px;
`;

export const List = styled.ul`

    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    `;

export const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`;
// -------------------------------------------right-------------------------------------------
export const Right = styled.div`
    flex:1;
    padding: 20px;
`;

export const ContactItem = styled.div`

`;

export const Payment = styled.img`

`;