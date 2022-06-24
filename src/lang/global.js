import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";
import portfolio4 from "assets/img/portfolio4.jpg";

import placeholder from "assets/img/placeholder.png";

import pixieSlide from "assets/img/pixieslide.png";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
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
        link: "#",
        previews: [placeholder, placeholder],
        headline: "Chart Party",
        text: "Chart Party",
        badges: ["React Native", "Styled Components", "UI / UX"],
    },
    {
        link: "#",
        previews: [pixieSlide, pixieSlide],
        headline: "Pixie Slide",
        text: "Pixie Slide is an upcoming slide 'n' run puzzle game and will debut on android.",
        badges: ["Unity Engine", ".NET (C#)", "Blender"],
    },
];