import PropTypes from "prop-types";

import { StyledVideo } from "./styles";
import { useEffect, useRef } from "react";

const Video = ({
    id,
    src,
    poster,
    className,
}: {
    id?: string;
    src: string;
    poster: string;
    className?: string;
}) => {
    const ref = useRef<any>(null);

    useEffect(() => {
        ref?.current?.play();
    }, []);

    return (
        <StyledVideo
            ref={ref}
            poster={poster}
            className={className}
            id={id}
            muted
            loop
        >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </StyledVideo>
    );
};

Video.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Video;
