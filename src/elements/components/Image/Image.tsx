import { StyledImage } from "./Image.styles";

interface ImageProps {
    alt: string;
    height?: string;
    margin?: string;
    src: string;
    width?: string;
}

const Image = ({ alt, height, margin, src, width }: ImageProps) => {
    return (
        <StyledImage
            alt={alt}
            $height={height}
            $margin={margin}
            src={src}
            $width={width}
        />
    );
};

export default Image;
