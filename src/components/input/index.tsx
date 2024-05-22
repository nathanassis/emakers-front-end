import './index.css';

interface InputProps {
    type: string,
    name: string,
    placeholder?: string,
    is_required?: boolean | false,
    style?: React.CSSProperties,
}

function Input(props: InputProps) {
    let { type, name, placeholder, is_required, style } = props;

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={is_required}
            style={style}
        />
    );
}

export default Input;
