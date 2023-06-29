import styled from "styled-components";
import { transition } from "styles/variables";

export const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: ${transition};
`;
