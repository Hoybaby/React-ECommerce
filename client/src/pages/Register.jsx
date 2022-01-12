import React from 'react'
import { Agreement, Button, Container, Form, Input, Title, Wrapper } from './styles/Register.styles';

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Create an Account
                </Title>
                <Form>
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By clicking Register, you agree to our Terms, Data Policy and Cookies Policy.
                    </Agreement>
                    <Button>
                        Register
                    </Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;
