import React from "react";
import num1 from '../assets/portfolio/tribute website.jpg'
import num2 from '../assets/portfolio/github profile finder.jpg'
import num3 from '../assets/portfolio/image slider.jpg'
import num4 from '../assets/portfolio/random color generator.jpg'
import num5 from '../assets/portfolio/Job Form.jpg'
import num6 from '../assets/portfolio/digital clock.jpg'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: num1,
      demoLink: "https://abdulrehmanghub.github.io/Tribute-to-AQ-Khan__Web-dev-Project/",
      codeLink: "https://github.com/AbdulRehmanGHub/Tribute-to-AQ-Khan__Web-dev-Project"
    },
    {
      id: 2,
      src: num2,
      demoLink: "https://abdulrehmanghub.github.io/GitHub-Profile-Finder/",
      codeLink: "https://github.com/AbdulRehmanGHub/GitHub-Profile-Finder"
    },
    {
      id: 3,
      src: num3,
      demoLink: "https://abdulrehmanghub.github.io/Image-Slider/",
      codeLink: "https://github.com/AbdulRehmanGHub/Image-Slider"
    },
    {
      id: 4,
      src: num4,
      demoLink: "https://AbdulRehmanGHub.github.io/Auto-Color-Generator",
      codeLink: "https://github.com/AbdulRehmanGHub/Auto-Color-Generator"
    },
    {
      id: 5,
      src: num5,
      demoLink: "https://AbdulRehmanGHub.github.io/Job-Form",
      codeLink: "https://github.com/AbdulRehmanGHub/Job-Form"
    },
    {
      id: 6,
      src: num6,
      demoLink: "https://abdulrehmanghub.github.io/Digital-Cock__Web-Dev-Project/",
      codeLink: "https://github.com/AbdulRehmanGHub/Digital-Cock__Web-Dev-Project"
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-fullk text-white md:h-fit">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
          {
            portfolios.map(({id, src, demoLink, codeLink}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
