import React from 'react'
import { Container, Form, Input, Title, Wrapper, Button, Link } from './styles/Login.styles';

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>
                Sign In
            </Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>
                    Login
                </Button>
                <Link>Do not Remember the password?</Link>
                <Link>Create a new Account.</Link>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login;
