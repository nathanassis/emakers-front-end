import "./index.css";

interface SectionProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Section(props: SectionProps) {
    let { children, style } = props;

    return (
        <section style={style}>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Section;
