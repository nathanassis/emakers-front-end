import Button from "../../components/button";
import Container from "../../components/container";
import Form from "../../components/form";
import Input from "../../components/input";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import "./index.css";

function Admin() {
    return (
        <>
            <Navbar />
            <Section style={{ height: "calc(100% - 100px)" }}>
                <Container classes="container-admin invert-color">
                    <h1 className="container-admin-title">Cadastrar Jogo</h1>
                    <Form>
                        <Input type="text" name="new-title" placeholder="Título do jogo" />
                        <Input type="text" name="new-gender" placeholder="Gênero" />
                        <textarea name="new-desc" placeholder="Descrição"></textarea>
                        <Input type="file" name="new-image" />
                        <Button classes="admin-button" type="submit" name="new-submit">Cadastrar</Button>
                    </Form>
                </Container>
                <Container classes="container-admin">
                    <h1 className="container-admin-title">Remover Jogo</h1>
                    <Form>
                        <Input classes="invert-color" type="text" name="remove-title" placeholder="Título do jogo ou ID" />
                        <Button classes="admin-button invert-color" type="submit" name="remove-submit">Remover</Button>
                    </Form>
                </Container>
                <Container classes="container-admin invert-color">
                    <h1 className="container-admin-title">Editar Jogo</h1>
                    <Form>
                        <Input type="text" name="edit-title" placeholder="Título do jogo" />
                        <Input type="text" name="edit-gender" placeholder="Gênero" />
                        <textarea name="edit-desc" placeholder="Descrição"></textarea>
                        <Input type="file" name="edit-image" />
                        <Button classes="admin-button" type="submit" name="edit-submit">Modificar</Button>
                    </Form>
                </Container>
            </Section>
        </>
    );
}

export default Admin;