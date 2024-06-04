import Container from "../../components/container";
import CredentialBackground from "./common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/form";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Register() {
    return (
        <CredentialBackground>
            <Container classes="container-credential" style={{ flexDirection: "column" }}>
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
                    <a className="credential-btn" href="/user">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </Form>
            </Container>
            <Container classes="credential-nav">
                <Container style={{ flexDirection: "column", width: "400px" }}>
                    <a className="credential-link" href="/login">Fazer Login</a>
                </Container>
            </Container>
        </CredentialBackground>
    );
}

export default Register;