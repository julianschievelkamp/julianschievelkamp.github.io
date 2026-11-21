import { StyledImage } from "./Image.styles";

interface ImageProps {
    alt: string;
    src: string;
}

const Image = ({ alt, src }: ImageProps) => (
    <StyledImage alt={alt} src={src} />
);

export default Image;
