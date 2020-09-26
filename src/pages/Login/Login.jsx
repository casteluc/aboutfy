import React from 'react'

import LoginButton from '../../components/Login/LoginButton'
import LoginText from '../../components/Login/LoginText'
import Footer from '../../components/Footer'
import { Container, Content } from './LoginStyle'

export default function Login() {

    return (
        <Container>
            <Content>
                <LoginText />
                <LoginButton />
            </Content>

            <Footer />
        </Container>
    )
}