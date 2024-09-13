import React from "react";
import num1 from '../assets/portfolio/ar community.png'
import num2 from '../assets/portfolio/spotify clone.png'
import num3 from '../assets/portfolio/Calendar VUE JS.png'
import num4 from '../assets/portfolio/catchub.jpg'
import num5 from '../assets/portfolio/md editor vuejs.png'
import num6 from '../assets/portfolio/redcard.jpg'
import num7 from '../assets/portfolio/submission.jpg'
import num8 from '../assets/portfolio/todo app vue js.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            name: "AR Community",
            src: num1,
            demoLink: "https://arcommunity.me/",
            codeLink: "Private"
        },
        {
            id: 2,
            name: "Spotify Clone",
            src: num2,
            demoLink: "https://abdulrehmanghub.github.io/Spotify-Clone/",
            codeLink: "https://github.com/AbdulRehmanGHub/Spotify-Clone"
        },
        {
            id: 3,
            name: "Vue Calendar",
            src: num3,
            demoLink: "https://abdulrehmanghub.github.io/Vue-Calendar/",
            codeLink: "https://github.com/AbdulRehmanGHub/Vue-Calendar"
        },
        {
            id: 4,
            name: "Catchub",
            src: num4,
            demoLink: "https://abdulrehmanghub.github.io/CatchHub/",
            codeLink: "https://github.com/AbdulRehmanGHub/CatchHub"
        },
        {
            id: 5,
            name: "Markdown Editor",
            src: num5,
            demoLink: "https://abdulrehmanghub.github.io/Vue-MarkDown/",
            codeLink: "https://github.com/AbdulRehmanGHub/Vue-MarkDown"
        },
        {
            id: 6,
            name: "RedCard",
            src: num6,
            demoLink: "https://abdulrehmanghub.github.io/RedCard/",
            codeLink: "https://github.com/AbdulRehmanGHub/RedCard"
        },
        {
            id: 7,
            name: "Submission",
            src: num7,
            demoLink: "https://abdulrehmanghub.github.io/Submission/",
            codeLink: "https://github.com/AbdulRehmanGHub/Submission"
        },
        {
            id: 8,
            name: "Vue Todo List",
            src: num8,
            demoLink: "https://abdulrehmanghub.github.io/Vue-Todo/",
            codeLink: "https://github.com/AbdulRehmanGHub/Vue-Todo"
        }
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-fullk text-white md:h-fit cursor-default">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-5 mt-20">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8">
                    {
                        portfolios.map(({ id, name, src, demoLink, codeLink }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative d-flex flex-column">
                                <img src={src} alt={name} className="rounded-md duration-200 hover:scale-105 w-full h-64 object-fill" />
                                <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 py-2 px-4 text-center text-white">
                                    <p className="text-lg font-semibold mt-4">{name}</p>
                                </div>
                                <div className="flex items-center justify-center mt-2">
                                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 mb-14 m-4 duration-200 hover:scale-105">Demo</a>
                                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 mb-14 m-4 duration-200 hover:scale-105">Code</a>
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
