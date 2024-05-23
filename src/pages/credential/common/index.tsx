import Container from "../../../components/container";
import Image from "../../../components/image";
import Section from "../../../components/section";
import "./index.css";

interface CredentialBackgroundProps {
    children: React.ReactNode,
}

function CredentialBackground(props: CredentialBackgroundProps) {
    let { children } = props;
    return (
        <Section>
            <Container id="credential-form">
                {children}
            </Container>
            <Container id="credential-image">
                <Image src="/images/credential.png" style={{ position: "fixed", top: "0" }} />
            </Container>
        </Section>
    );
}

export default CredentialBackground;
