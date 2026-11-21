import { css, type Keyframes } from "styled-components";

const ANIMATION_DURATION = "1s";

/**
 * Plays a fade-in animation once and keeps the end state.
 * With `prefers-reduced-motion`, it finishes almost instantly.
 */
export const playOnce = (keyframes: Keyframes, delay = "0s") => css`
    animation: ${keyframes} ${ANIMATION_DURATION} ${delay} forwards;

    @media (prefers-reduced-motion: reduce) {
        animation-duration: 0.01ms;
        animation-delay: 0s;
    }
`;
