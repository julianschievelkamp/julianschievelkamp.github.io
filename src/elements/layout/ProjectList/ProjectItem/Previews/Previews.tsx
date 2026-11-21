import { useState } from "react";
import { StyledPreviews, Thumb, ThumbsWrapper } from "./Previews.styles";
import Image from "elements/components/Image/Image";

interface PreviewsProps {
    previews: string[];
}

const Previews = ({ previews }: PreviewsProps) => {
    const [previewIndex, setPreviewIndex] = useState(0);

    return (
        <StyledPreviews>
            <Image src={previews[previewIndex]} alt="" />

            <ThumbsWrapper>
                {previews.map((src, index) => (
                    <Thumb
                        key={src}
                        onClick={() => setPreviewIndex(index)}
                        $isActive={previewIndex === index}
                    >
                        <Image src={src} alt="" />
                    </Thumb>
                ))}
            </ThumbsWrapper>
        </StyledPreviews>
    );
};

export default Previews;
