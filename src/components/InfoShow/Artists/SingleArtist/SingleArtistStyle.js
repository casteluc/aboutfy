import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-radius: 10px;
    padding: 5px;
    margin: 20px auto;
    box-shadow: 2px 2px 7px #444;
    max-width: 500px;
    transition: all 0.3s;

    p:first-of-type {
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        margin: 0 10px;
        width: 30px;
    }

    p:last-of-type {
        margin: 0 10px;
        font-size: 1.3rem;
        font-weight: 600;
    }

    img {
        width: 55px;
        height: 55px;
        border-radius: 5px;
    }

    &:hover {
        box-shadow: 3px 3px 10px #333;
        cursor: pointer;
    }

    @media only screen and (max-width: 480px) {
        p:first-of-type {
            font-size: 1.125rem;
        }
        
        p:last-of-type {
            font-size: 0.875rem;
        }

        img {
            width: 35px;
            height: 35px;
        }
}
`