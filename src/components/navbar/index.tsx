import Form from "../form";
import Image from "../image";
import Input from "../input";
import "./index.css";

function Navbar() {
    return (
        <nav>
            <div className="nav-container">
                <Image src="/images/avatar.png" style={{ margin: "0 auto" }} />
                <a className="nav-link">Lançamentos</a>
                <hr className="vl"></hr>
                <a className="nav-link">Populares</a>
                <hr className="vl"></hr>
                <a className="nav-link">Gêneros</a>
                <hr className="vl"></hr>
                <a className="nav-link">Promoções</a>
                <hr className="vl"></hr>
                <a className="nav-link" href="/user">Conta</a>
                <Form>
                    <Input
                        name="search"
                        type="text"
                        style={{
                            width: "165px",
                            height: "40px",
                            backgroundColor: "rgba(151, 164, 162, 0.45)",
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "15px",
                            padding: "0",
                            marginBottom: "0",
                            fontSize: "20px"
                        }}
                    />
                </Form>
            </div>
        </nav>
    );
}

export default Navbar;