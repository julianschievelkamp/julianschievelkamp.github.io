import DadaYaga from "assets/img/dada_yaga.jpg";
import Andromeda from "assets/img/andromeda.jpg";
import Versus1 from "assets/img/versus_1.jpg";
import Viscosity from "assets/img/viscosity.jpg";

export interface ProjectData {
    title: string;
    description: string;
    previews: string[];
    tools: string[];
    link: string;
}

export const projectData: ProjectData[] = [
    {
        title: "Portfolio",
        description:
            "A portfolio website showcasing artistic images and videos. Live at www.julianschievelkamp.com. The site is a pure frontend project: HTML is pre-rendered at build time, and there is no backend, database or user input.",
        previews: [DadaYaga, Andromeda, Versus1, Viscosity],
        tools: [
            "React",
            "Typescript",
            "Vike (SSR)",
            "Adobe Software",
            "Unreal Engine",
        ],
        link: "https://www.julianschievelkamp.com/",
    },
];
