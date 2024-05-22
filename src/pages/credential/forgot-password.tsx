import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function ForgotPassword() {
    return (
        <CredentialBackground>
            <Container>
                <h1>Recuperar Conta</h1>
                <form>
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <Button name="btn-submit" type="submit">
                        {"->"}
                    </Button>
                </form>
            </Container>
            <Container id="credential-nav">
                <a href="/register">Criar Conta</a>
                <a href="/login">Fazer Login</a>
            </Container>
        </CredentialBackground>
    );
}

export default ForgotPassword;