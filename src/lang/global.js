import portfolio from "assets/img/portfolio.jpg";
import placeholder from "assets/img/placeholder.png";

export const portfolioData = [
    {
        link: "https://www.julianschievelkamp.com",
        image: portfolio,
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
        badges: ["Adobe Software", "Unreal Engine", "Blender"],
    },
    {
        link: "https://julianschievelkamp.github.io/ChartParty/",
        image: placeholder,
        headline: "Chart Party",
        text: "Chart Party",
        badges: ["React Native", "Styled Components", "UI / UX"],
    },
    {
        link: "https://julianschievelkamp.github.io/PixieSlide/",
        image: placeholder,
        headline: "Pixie Slide",
        text: "Pixie Slide",
        badges: ["Unity Engine", ".NET (C#)", "3D"],
    },
];
