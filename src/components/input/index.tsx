import './index.css';

interface InputProps {
    type: string,
    name: string,
    placeholder?: string,
    is_required?: boolean | false,
    style?: React.CSSProperties,
    classes?: string,
}

function Input(props: InputProps) {
    let { classes, type, name, placeholder, is_required, style } = props;

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={is_required}
            style={style}
            className={classes}
        />
    );
}

export default Input;
