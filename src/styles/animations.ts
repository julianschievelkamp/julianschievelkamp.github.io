import { css, type Keyframes } from "styled-components";

const ANIMATION_DURATION = "1s";

/**
 * Spielt eine Einblend-Animation einmalig ab und behält den Endzustand.
 * Bei `prefers-reduced-motion` wird sie praktisch sofort beendet.
 */
export const playOnce = (keyframes: Keyframes, delay = "0s") => css`
    animation: ${keyframes} ${ANIMATION_DURATION} ${delay} forwards;

    @media (prefers-reduced-motion: reduce) {
        animation-duration: 0.01ms;
        animation-delay: 0s;
    }
`;
