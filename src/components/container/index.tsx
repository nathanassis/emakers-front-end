interface ContainerProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Container(props: ContainerProps) {
    let { children, style } = props;

    return (
        <div>
            {children}
        </div>
    );
}

export default Container;
