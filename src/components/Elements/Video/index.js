import React from "react";
import PropTypes from "prop-types";

import { StyledVideo } from "./styles";
import { useEffect, useRef } from "react";

const Video = ({ src, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.play();
  }, []);

  return (
    <StyledVideo ref={ref} className={className} muted loop>
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
