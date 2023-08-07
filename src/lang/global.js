import portfolio1 from "assets/img/portfolio1.jpg";
import portfolio2 from "assets/img/portfolio2.jpg";
import portfolio3 from "assets/img/portfolio3.jpg";
import portfolio4 from "assets/img/portfolio4.jpg";

import chartparty1 from "assets/img/chartparty1.png";
import chartparty2 from "assets/img/chartparty2.png";
import chartparty3 from "assets/img/chartparty3.png";
import chartparty4 from "assets/img/chartparty4.png";

import pixieslide1 from "assets/img/pixieslide1.jpg";
import pixieslide2 from "assets/img/pixieslide2.png";

import pixieslide from "assets/video/pixieslide.mp4";
import andromeda from "assets/video/andromeda.mp4";

export const portfolioData = [
  {
    link: "https://www.julianschievelkamp.com",
    previewPosition: "center",
    previews: [portfolio1, portfolio2, portfolio3, portfolio4],
    videos: [andromeda],
    headline: "Artist Portfolio",
    text: (
      <>
        In addition to my expertise in coding, I also like to push my creative
        boundaries as an artist by using experimental software and cutting-edge
        technologies.
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
        Chart Party is an experimental UI/UX project allowing to track currency
        portfolios based on transaction data. Further components are in
        development and will be added over time.
        <br />
        <br />
        <a
          href="https://julianschievelkamp.github.io/ChartParty"
          target="_blank"
          rel="noreferrer"
        >
          See demo build
        </a>
        <br />
        <a
          href="https://julianschievelkamp.github.io/ChartParty/storybook-static"
          target="_blank"
          rel="noreferrer"
        >
          See storybook build
        </a>
      </>
    ),
    badges: ["React", "TypeScript", "Styled Components"],
  },
  {
    previewPosition: "center",
    previews: [pixieslide1, pixieslide2],
    videos: [pixieslide],
    headline: "Pixie Slide",
    text: "Pixie Slide is an upcoming slide 'n' run puzzle game for android devices, in which players have to solve complex mechanics in vividly colored matrices.",
    badges: ["Unity Engine", ".NET (C#)", "Blender"],
  },
];
