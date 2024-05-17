interface ContainerProps {
    children?: React.ReactNode,
    style?: React.CSSProperties,
}

function Container(props: ContainerProps): JSX.Element {
    let { children, style } = props;

    return (
        <section style={style}>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Container;
