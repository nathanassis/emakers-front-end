import "./index.css";

interface ContainerProps {
    id?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Container(props: ContainerProps) {
    let { id, children, style } = props;

    return (
        <div id={id} style={style}>
            {children}
        </div>
    );
}

export default Container;
