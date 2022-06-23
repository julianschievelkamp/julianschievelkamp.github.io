import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";

import placeholder from "assets/img/placeholder.png";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
        previews: [portfolio1, portfolio2, portfolio3],
        headline: "Artist Portfolio",
        text: (
            <>
                I'm also a visual artist who emphasizes on the synergies of
                classic photography and computer generated imagery (CGI). My
                skills include analog photography as well as digital art and
                animation.
                <br />
                <br />
                Visit <i>www.julianschievelkamp.com</i>
            </>
        ),
        badges: ["Photography", "Adobe Software", "Unreal Engine"],
    },
    {
        link: "https://julianschievelkamp.github.io/ChartParty/",
        previews: [placeholder, placeholder],
        headline: "Chart Party",
        text: "Chart Party",
        badges: ["React Native", "Styled Components", "UI / UX"],
    },
    {
        link: "https://julianschievelkamp.github.io/PixieSlide/",
        previews: [placeholder, placeholder],
        headline: "Pixie Slide",
        text: "Pixie Slide",
        badges: ["Unity Engine", ".NET (C#)", "Blender"],
    },
];
