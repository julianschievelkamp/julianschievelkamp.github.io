import { useState } from "react";
import {
    StyledPreviews,
    PreviewButton,
    PreviewButtons,
} from "./Previews.styles";
import Image from "elements/components/Image/Image";

interface PreviewsProps {
    previews: string[];
}

const Previews = ({ previews }: PreviewsProps) => {
    const [previewIndex, setPreviewIndex] = useState(0);

    return (
        <StyledPreviews>
            <Image src={previews[previewIndex]} alt="" />

            <PreviewButtons>
                {previews.map((src, index) => (
                    <PreviewButton
                        key={src}
                        aria-label={`Show preview ${index + 1}`}
                        aria-pressed={previewIndex === index}
                        onClick={() => setPreviewIndex(index)}
                        $isActive={previewIndex === index}
                    >
                        <Image src={src} alt="" />
                    </PreviewButton>
                ))}
            </PreviewButtons>
        </StyledPreviews>
    );
};

export default Previews;
