interface ImageProps {
    src: string,
    alt?: string,
    height?: string,
    width?: string,
    style?: React.CSSProperties,
}

function Image(props: ImageProps) {
    let { src, alt, height, width, style } = props;

    if (!src) {
        return;
    }

    return (
        <img
            src={src}
            alt={alt}
            style={style}
            height={height ?? undefined}
            width={width ?? undefined}
        />
    );
}

export default Image;
