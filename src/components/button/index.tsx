import './index.css';

interface ButtonProps {
    name: string,
    classes?: string,
    type: "submit" | "reset" | "button" | undefined,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Button(props: ButtonProps) {
    let { name, classes, type, children, style } = props;
    
    return (
        <button className={classes} type={type} name={name} style={style}>{children}</button>
    );
}

export default Button;
