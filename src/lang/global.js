import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";
import portfolio4 from "assets/img/portfolio4.jpg";

import blockboard1 from "assets/img/block-board1.png";
import blockboard2 from "assets/img/block-board2.png";

import pixieslide1 from "assets/img/pixieslide1.jpg";
import pixieslide2 from "assets/img/pixieslide2.png";

import pixieslide from "assets/video/pixieslide.mp4";
import andromeda from "assets/video/andromeda.mp4";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
        previewPosition: "center",
        previews: [portfolio1, portfolio2, portfolio3, portfolio4],
        videos: [andromeda],
        headline: "Artist Portfolio",
        text: (
            <>
                In addition to my expertise in coding, I also like to push my
                creative boundaries as an artist by using experimental software
                and cutting-edge technologies.
                <br />
                <br />
                <a
                    href="https://www.julianschievelkamp.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    www.julianschievelkamp.com
                </a>
            </>
        ),
        badges: ["Photography", "Adobe Software", "Unreal Engine"],
    },
    {
        link: "https://julianschievelkamp.github.io/block-board",
        previewPosition: "top right",
        previews: [blockboard1, blockboard2],
        headline: "Block Board",
        text: (
            <>
                Block Board displays current crypto currency market data in real
                time and uses several crypto market APIs. New widgets are in
                development and will be added over time.
                <br />
                <br />
                <a
                    href="https://julianschievelkamp.github.io/block-board"
                    target="_blank"
                    rel="noreferrer"
                >
                    Demo build
                </a>
                <br />
                <a
                    href="https://github.com/julianschievelkamp/block-board"
                    target="_blank"
                    rel="noreferrer"
                >
                    Repository
                </a>
            </>
        ),
        badges: ["React", "TypeScript", "Styled Components"],
    },
    {
        previewPosition: "center",
        previews: [pixieslide1, pixieslide2],
        videos: [pixieslide],
        headline: "Pixie Slide",
        text: "Pixie Slide is an upcoming slide 'n' run puzzle game for android devices, in which players have to solve complex mechanics in vividly colored matrices.",
        badges: ["Unity Engine", ".NET (C#)", "Blender"],
    },
];
