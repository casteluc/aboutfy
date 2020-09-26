import styled from 'styled-components'

export const Button = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    width: 100%;
    max-width: 380px;
    min-width: 280px;
    color: #111;
    background-color: #fafafa;
    text-decoration: none;
    border-radius: 100px;
    padding: 15px 20px;
    margin: 30px auto;
    transition: all 0.3s;
    box-shadow: 3px 3px 10px #11111177;

    &:hover {
    background-color: #f2f2f2;
    box-shadow: 3px 3px 15px #111111aa;
    }

    &:active {
        background-color: #aaa;
    }

    img {
        width: 43px;
    }

    h3 {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 600;
    }
`