import Button from "../../components/button";
import Container from "../../components/container";
import CredentialBackground from "./common";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Registrar() {
    return (
        <CredentialBackground>
            <Container>
                <h1>Registrar</h1>
                <form>
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
                </form>
            </Container>
            <Container id="credential-nav">
                <a href="/login">Fazer Login</a>
            </Container>
        </CredentialBackground>
    );
}

export default Registrar;