import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";
import portfolio4 from "assets/img/portfolio4.jpg";

import chartparty1 from "assets/img/chartparty1.png";
import chartparty2 from "assets/img/chartparty2.png";
import chartparty3 from "assets/img/chartparty3.png";
import chartparty4 from "assets/img/chartparty4.png";

import pixieslide1 from "assets/img/pixieslide1.png";
import pixieslide2 from "assets/img/pixieslide2.png";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
        previewPosition: "center",
        previews: [portfolio1, portfolio2, portfolio3, portfolio4],
        headline: "Artist Portfolio",
        text: (
            <>
                Besides being a developer, I'm also a visual artist who
                emphasizes on the synergies of classic photography and computer
                generated imagery (CGI). My skills include analog photography as
                well as digital art and animation.
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
        link: "https://julianschievelkamp.github.io/ChartParty",
        previewPosition: "top right",
        previews: [chartparty1, chartparty2, chartparty3, chartparty4],
        headline: "Chart Party",
        text: (
            <>
                Chart Party is an experimental UI/UX project allowing to track
                currency portfolios based on transaction data. Further
                components are in development and will be added over time.
                <br />
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See repository on github
                </a>
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See storybook build
                </a>
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See demo build
                </a>
            </>
        ),
        badges: ["React", "TypeScript", "Styled Components"],
    },
    {
        link: "#",
        previewPosition: "center",
        previews: [pixieslide1, pixieslide2],
        headline: "Pixie Slide",
        text: "Pixie Slide is an upcoming slide 'n' run puzzle game for android devices, in which players have to solve complex mechanics in vividly colored matrices.",
        badges: ["Unity3D Engine", ".NET (C#)", "Blender"],
    },
];
