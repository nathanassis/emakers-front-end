import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Form from "../../components/form";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function ForgotPassword() {
    return (
        <CredentialBackground>
            <Container classes="container-credential" style={{ flexDirection: "column" }}>
                <h1>Recuperar Conta</h1>
                <Form>
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <Button name="btn-submit" type="submit">
                        {"->"}
                    </Button>
                </Form>
            </Container>
            <Container classes="credential-nav">
                <Container style={{ flexDirection: "column", width: "400px" }}>
                    <a href="/register">Criar Conta</a>
                    <a href="/login">Fazer Login</a>
                </Container>
            </Container>
        </CredentialBackground>
    );
}

export default ForgotPassword;