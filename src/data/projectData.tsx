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
            "In addition to my expertise in coding, I also like to push my creative boundaries as an artist by using experimental software and cutting-edge technologies.",
        previews: [DadaYaga, Andromeda, Versus1, Viscosity],
        tools: ["Photography", "Adobe Software", "Unreal Engine"],
        link: "https://www.julianschievelkamp.com/",
    },
    {
        title: "Portfolio",
        description:
            "In addition to my expertise in coding, I also like to push my creative boundaries as an artist by using experimental software and cutting-edge technologies.",
        previews: [DadaYaga, Andromeda, Versus1, Viscosity],
        tools: ["Photography", "Adobe Software", "Unreal Engine"],
        link: "https://www.julianschievelkamp.com/",
    },
];
