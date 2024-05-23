import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Form from "../../components/form";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Register() {
    return (
        <CredentialBackground>
            <Container style={{ flexDirection: "column" }}>
                <h1>Registrar</h1>
                <Form>
                    <Input
                        type="text"
                        name="user"
                        placeholder="Nome de Usuário"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <Input
                        type="text"
                        name="cpf"
                        placeholder="CPF"
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                    />
                    <Input
                        type="password"
                        name="password-confirm"
                        placeholder="Confirmar Senha"
                    />
                    <Button name="btn-submit" type="submit">
                        {"->"}
                    </Button>
                </Form>
            </Container>
            <Container id="credential-nav">
                <Container style={{ flexDirection: "column", width: "400px" }}>
                    <a href="/login">Fazer Login</a>
                </Container>
            </Container>
        </CredentialBackground>
    );
}

export default Register;