import styled from 'styled-components'

import ContainerPattern from '../../styles/patterns/Container'
import ContentPattern from '../../styles/patterns/Content'

export const Container = styled(ContainerPattern)``

export const Content = styled(ContentPattern)`
    padding: 0 20px;
    max-width: 680px;
`

export const Buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    button {
        font-size: 0.875rem;
        color: #222;
        width: 150px;
        padding: 5px 0;
        border-radius: 50px;
        font-family: Poppins, sans-serif;
        font-weight: 700;
        margin: 0 5px 10px 5px;
        transition: all 0.2s;
    }

    button:hover {
        background-color: #cdcdcd;
        color: #222;
    }

    button:active {
        background-color: #aaa;
    }

    .selected {
        background-color: #cdcdcd;
        color: #222;
    }

    @media only screen and (max-width: 480px) {
        button {
            font-size: 0.75em;
            width: 120px;
        }
    }
`

export const CreatePlaylistButton = styled.button`
    font-family: Poppins, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2EBF91;
    color: #fafafa;
    font-size: 1.3em;
    font-weight: 600;
    border-radius: 10px;
    padding: 3px;
    margin: 0 auto 20px auto;
    box-shadow: 2px 2px 7px #444;
    width: 100%;
    max-width: 500px;
    transition: all 0.3s;

    &:hover {
        background-color:  rgba(46, 191, 145, 0.8);
    }

    &:active {
        background-color:  rgba(46, 191, 145, 0.2);
    }

    @media only screen and (max-width: 480px) {
        font-size: 1.1rem;
    }
`