import Container from "../../components/container";
import CredentialBackground from "./common";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/form";
import Input from "../../components/input";
import React from "react";
import "./credential.css";


function Login() {
    return (
        <CredentialBackground>
            <Container classes="container-credential" style={{ flexDirection: "column" }}>
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
                    <a className="credential-btn" href="/user">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </Form>
            </Container>
            <Container classes="credential-nav">
                <Container style={{ flexDirection: "column", width: "400px" }}>
                    <a className="credential-link" href="/register">Criar Conta</a>
                    <a className="credential-link" href="/forgot_password">Esqueceu a Senha?</a>
                </Container>
            </Container>
        </CredentialBackground>
    );
}

export default Login;