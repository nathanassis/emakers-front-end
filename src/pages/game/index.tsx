import Container from "../../components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Image from "../../components/image";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import "./index.css";

function Game() {
    return (
        <>
            <Navbar />
            <Section style={{ height: "calc(100% - 100px)" }}>
                <Container classes="container-game">
                    <Image src="/images/game1_format2.png" style={{ maxWidth: "calc(100% - 400px)" }} />
                    <Container classes="container-game-info invert-color">
                        <h1>God of War</h1>
                        <p>
                            Com a vingança contra os
                            deuses do Olimpo em um
                            passado distante, Kratos
                            agora vive como um mortal
                            no reino dos deuses e
                            monstros nórdicos. É nesse
                            mundo duro e implacável
                            que ele deve lutar para
                            sobreviver... e ensinar
                            seu filho a fazer o mesmo.
                        </p>
                        <hr style={{ margin: "20px 0", width: "85%" }}></hr>
                        <a href="#" className="game-link">
                            Adicionar ao Carrinho
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                        <a href="#" className="game-link">
                            Solicitar Reembolso
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </Container>
                </Container>
            </Section>
        </>
    );
}

export default Game;