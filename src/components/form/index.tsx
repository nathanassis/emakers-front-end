import "./index.css";

interface FormProps {
    id?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Form(props: FormProps) {
    let { id, children, style } = props;

    return (
        <form id={id} style={style}>
            {children}
        </form>
    );
}

export default Form;
