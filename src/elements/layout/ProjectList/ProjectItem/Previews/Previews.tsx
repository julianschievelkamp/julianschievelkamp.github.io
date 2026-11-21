import { useState } from "react";

import type { Preview } from "data/projectData";
import Image from "elements/components/Image/Image";

import {
    PreviewButton,
    PreviewButtons,
    StyledPreviews,
} from "./Previews.styles";

interface PreviewsProps {
    previews: Preview[];
}

const Previews = ({ previews }: PreviewsProps) => {
    const [previewIndex, setPreviewIndex] = useState(0);
    const activePreview = previews[previewIndex];

    return (
        <StyledPreviews>
            <Image src={activePreview.src} alt={activePreview.alt} />

            <PreviewButtons>
                {previews.map(({ src, alt }, index) => (
                    <PreviewButton
                        key={src}
                        aria-label={`Show ${alt}`}
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
