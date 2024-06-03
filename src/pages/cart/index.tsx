import Button from "../../components/button";
import Container from "../../components/container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Form from "../../components/form";
import Image from "../../components/image";
import Input from "../../components/input";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import "./index.css";

function Cart() {
    return (
        <>
            <Navbar />
            <Section style={{ height: "calc(100% - 100px)" }}>
                <Container classes="invert-color container-cart">
                    <h1>Carrinho de Compras</h1>
                    <Container classes="container-cart-item">
                        <Container classes="container-cart-info invert-color">
                            <Container classes="container-cart-title invert-color">
                                <p className="cart-game-title">Sponge Bob: Battle for BikiniBottom</p>
                                <p className="cart-game-platform">Plataforma: PC</p>
                            </Container>
                            <p className="item-price">R$ 299,00</p>
                        </Container>
                        <Image src="/images/game1.png" width="190" height="200" style={{ objectFit: "contain" }} />
                    </Container>
                    <Container classes="container-cart-item">
                        <Container classes="container-cart-info invert-color">
                            <Container classes="container-cart-title invert-color">
                                <p className="cart-game-title">Sponge Bob: Battle for BikiniBottom</p>
                                <p className="cart-game-platform">Plataforma: PC</p>
                            </Container>
                            <p className="item-price">R$ 299,00</p>
                        </Container>
                        <Image src="/images/game1.png" width="190" height="200" style={{ objectFit: "contain" }} />
                    </Container>
                    <hr style={{ margin: "0 120px" }}></hr>
                    <Container classes="container-game-price invert-color">
                        <p className="item-price">R$ 598,00</p>
                        <p className="item-price">Total</p>
                    </Container>
                </Container>
                <Container classes="container-payment">
                    <h1>Método de Pagamento</h1>
                    <Form>
                        <Container classes="container-payment-method">
                            <Image src="/images/pix.png" height="60" width="60" />
                            Pix
                            <Input classes="container-payment-radio" type="radio" name="payment_method" />
                        </Container>
                        <hr style={{ margin: "40px 0", width: "400px" }}></hr>
                        <Container classes="container-terms-and-conditions">
                            <Input classes="container-payment-radio" type="radio" name="terms_and_conditions" />
                            <label htmlFor="terms_and_conditions">Eu aceito os termos e condições</label>
                        </Container>
                        <Button classes="cart-button" type="submit" name="submit_btn">
                            Finalizar Compra
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                    </Form>
                </Container>
            </Section>
        </>
    );
}

export default Cart;