import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Login() {
    return (
        <CredentialBackground>
            <Container>
                <h1>Login</h1>
                <form>
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
                </form>
            </Container>
            <Container id="credential-nav">
                <a href="/register">Criar Conta</a>
                <a href="/forgot_password">Esqueceu a Senha?</a>
            </Container>
        </CredentialBackground>
    );
}

export default Login;