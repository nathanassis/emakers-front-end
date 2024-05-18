import './index.css';

interface ButtonProps {
    name: string,
    type: "submit" | "reset" | "button" | undefined,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Button(props: ButtonProps) {
    let { name, type, children, style } = props;
    
    return (
        <button type={type} name={name} style={style}>{children}</button>
    );
}

export default Button;
