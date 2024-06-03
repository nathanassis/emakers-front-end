import Container from "../../components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "../../components/image";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import "./index.css";

function User() {
    return (
        <>
            <Navbar />
            <Section style={{ height: "calc(100% - 100px)" }}>
                <Container classes="container-user">
                    <h1 className="container-user-title">Olá, {"<<Nome do Usuário>>"}</h1>
                    <Container classes="container-info">
                        <p className="container-user-text">Seu email é nomeusuario@email.com</p>
                        <p className="container-user-text">Seu CPF é 123.456.789-00</p>
                        <a className="user-link" href="#">
                            Alterar Dados
                            <FontAwesomeIcon className="user-icon" icon={faPencil} />
                        </a>
                        <a className="user-link" href="#">
                            Excluir Conta
                            <FontAwesomeIcon className="user-icon" icon={faTrash} />
                        </a>
                        <a className="admin-link user-link" href="/admin">Tela do admin</a>
                    </Container>
                </Container>
                <Container classes="container-games">
                    <h2 className="container-games-title">Jogos adquiridos:</h2>
                    <Container classes="container-games-row">
                        <Container classes="container-games-item">
                            <Image src="/images/game2.png" height="250" width="190" />
                            <p className="container-games-grade">100/100</p>
                        </Container>
                        <Container classes="container-games-item">
                            <Image src="/images/game3.png" height="250" width="190" />
                            <p className="container-games-grade">95/100</p>
                        </Container>
                    </Container>
                    <Container classes="container-games-row">
                        <Container classes="container-games-item">
                            <Image src="/images/game1.png" height="250" width="190" />
                            <p className="container-games-grade">75/100</p>
                        </Container>
                        <Container classes="container-games-item">
                            <Image src="/images/game4.png" height="250" width="190" />
                            <p className="container-games-grade">Adicionar avaliação</p>
                        </Container>
                    </Container>
                </Container>
            </Section>
        </>
    );
}

export default User;