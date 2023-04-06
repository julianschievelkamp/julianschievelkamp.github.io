import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";
import portfolio4 from "assets/img/portfolio4.jpg";

import chartparty1 from "assets/img/chartparty1.png";
import chartparty2 from "assets/img/chartparty2.png";
import chartparty3 from "assets/img/chartparty3.png";
import chartparty4 from "assets/img/chartparty4.png";

import placeholder from "assets/img/placeholder.png";

import pixieSlide from "assets/img/pixieslide.png";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
        previewPosition: "center",
        previews: [portfolio1, portfolio2, portfolio3, portfolio4],
        headline: "Artist Portfolio",
        text: (
            <>
                I'm a visual artist who emphasizes on the synergies of classic
                photography and computer generated imagery (CGI). My skills
                include analog photography as well as digital art and animation.
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
        previews: [chartparty1, chartparty2, chartparty4],
        headline: "Chart Party",
        text: (
            <>
                ChartParty is an experimental UI/UX project allowing to track
                currency portfolios based on transaction data. Currently in
                development.
                <br />
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See repository
                </a>
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See storybook
                </a>
                <br />
                <a
                    href="https://julianschievelkamp.github.io/ChartParty"
                    target="_blank"
                    rel="noreferrer"
                >
                    See demo
                </a>
            </>
        ),
        badges: ["React", "TypeScript", "Styled Components"],
    },
    {
        link: "#",
        previewPosition: "center",
        previews: [placeholder, placeholder],
        headline: "Pixie Slide",
        text: "Pixie Slide",
        badges: ["Unity Engine", ".NET (C#)", "Blender"],
    },
];
