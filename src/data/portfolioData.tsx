import DadaYaga from "assets/img/dada_yaga.jpg";
import Andromeda from "assets/img/andromeda.jpg";
import Versus1 from "assets/img/versus_1.jpg";
import Viscosity from "assets/img/viscosity.jpg";

export type PortfolioItem = {
    link?: string;
    previewPosition: string;
    previews: string[];
    headline: string;
    text: React.ReactNode;
    badges: string[];
};

export const portfolioData: PortfolioItem[] = [
    {
        link: "https://www.julianschievelkamp.com",
        previewPosition: "center",
        previews: [DadaYaga, Andromeda, Versus1, Viscosity],
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
                    Portfolio
                </a>
                <br />
                <a
                    href="https://github.com/julianschievelkamp/portfolio"
                    target="_blank"
                    rel="noreferrer"
                >
                    Repository
                </a>
            </>
        ),
        badges: ["Photography", "Adobe Software", "Unreal Engine"],
    },
];
