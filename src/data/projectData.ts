import portfolioPreview from "assets/img/portfolio.jpg";

export interface ProjectData {
    title: string;
    description: string;
    preview: string;
    tools: string[];
    link: string;
}

export const projectData: ProjectData[] = [
    {
        title: "Portfolio",
        description:
            "A gallery-like portfolio for my fine art photography and video work, built with React, TypeScript and Vike as a fully pre-rendered static site. Highlights include truly gapless audio loops built on the Web Audio API and a custom pinch-to-zoom for exploring artwork details on touch devices. Accessibility and SEO were part of the design from the start, with semantic markup, keyboard navigation and structured data.",
        preview: portfolioPreview,
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
