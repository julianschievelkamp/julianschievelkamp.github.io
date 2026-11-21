import DadaYaga from "assets/img/dada_yaga.jpg";
import Andromeda from "assets/img/andromeda.jpg";
import Versus1 from "assets/img/versus_1.jpg";
import Viscosity from "assets/img/viscosity.jpg";

export interface Preview {
    src: string;
    alt: string;
}

export interface ProjectData {
    title: string;
    description: string;
    previews: Preview[];
    tools: string[];
    link: string;
}

export const projectData: ProjectData[] = [
    {
        title: "Portfolio",
        description:
            "A gallery-like portfolio for my fine art photography and video work, built with React, TypeScript and Vike as a fully pre-rendered static site. Highlights include truly gapless audio loops built on the Web Audio API and a custom pinch-to-zoom for exploring artwork details on touch devices. Accessibility and SEO were part of the design from the start, with semantic markup, keyboard navigation and structured data.",
        previews: [
            { src: DadaYaga, alt: "Dada Yaga" },
            { src: Andromeda, alt: "Andromeda" },
            { src: Versus1, alt: "Versus I" },
            { src: Viscosity, alt: "Viscosity" },
        ],
        tools: [
            "React",
            "Typescript",
            "Vike (SSR)",
            "Adobe Software",
            "Unreal Engine",
            "Blender",
        ],
        link: "https://www.julianschievelkamp.com/",
    },
];
