import Button from "../../components/button";
import Container from "../../components/container";
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
                                <p>Sponge Bob: Battle for BikiniBottom</p>
                                <p>Plataforma: PC</p>
                            </Container>
                            <p className="item-price">R$299,00</p>
                        </Container>
                        <Image src="/images/game1.png" width="190" height="200" style={{ objectFit: "contain" }} />
                    </Container>
                    <Container classes="container-cart-item">
                        <Container classes="container-cart-info invert-color">
                            <Container classes="container-cart-title invert-color">
                                <p>Sponge Bob: Battle for BikiniBottom</p>
                                <p>Plataforma: PC</p>
                            </Container>
                            <p className="item-price">R$299,00</p>
                        </Container>
                        <Image src="/images/game1.png" width="190" height="200" style={{ objectFit: "contain" }} />
                    </Container>
                    <hr style={{ margin: "0 120px" }}></hr>
                    <Container classes="container-game-price invert-color">
                        <p>R$598,00</p>
                        <p>Total</p>
                    </Container>
                </Container>
                <Container classes="container-payment">
                    <h1>Método de Pagamento</h1>
                    <Form>
                        <Container >
                            <label htmlFor="pix">PIX</label>
                            <Input classes="container-payment-radio" type="radio" name="payment_method" />
                        </Container>
                        <hr style={{margin: "40px 0"}}></hr>
                        <Container>
                            <Input classes="container-payment-radio" type="radio" name="terms_and_conditions" />
                            <label htmlFor="terms_and_conditions">Eu aceito os termos e condições</label>
                        </Container>
                        <Button type="submit" name="submit_btn">Finalizar Compra</Button>
                    </Form>
                </Container>
            </Section>
        </>
    );
}

export default Cart;