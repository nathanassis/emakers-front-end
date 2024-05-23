import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Form from "../../components/form";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Login() {
    return (
        <CredentialBackground>
            <Container style={{ flexDirection: "column" }}>
                <h1>Login</h1>
                <Form>
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                    />
                    <Button name="btn-submit" type="submit">
                        {"->"}
                    </Button>
                </Form>
            </Container>
            <Container id="credential-nav">
                <Container style={{ flexDirection: "column", width: "400px" }}>
                    <a href="/register">Criar Conta</a>
                    <a href="/forgot_password">Esqueceu a Senha?</a>
                </Container>
            </Container>
        </CredentialBackground>
    );
}

export default Login;