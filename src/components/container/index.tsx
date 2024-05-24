import "./index.css";

interface ContainerProps {
    classes?: string,
    id?: string,
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Container(props: ContainerProps) {
    let { classes, id, children, style } = props;

    return (
        <div id={id} style={style} className={classes}>
            {children}
        </div>
    );
}

export default Container;
