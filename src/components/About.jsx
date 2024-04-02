import React from 'react';

const About = () => {
    return (
        <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-20">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-6">
                    I am a Full Stack Web Developer having 2+ Years of experience in building websites and web applications using Modern Technologies. I have a strong foundation in web development and programming. I am passionate about learning new technologies and implementing them in real-world projects. I have a strong understanding of web development concepts and a keen interest in working on challenging projects. I am a quick learner and a team player who can work efficiently in a fast-paced environment.
                </p>
                <br/>
                <p className="text-xl mt-6">
                    I have hands-on experience in Frontend Technologies like HTML5, CSS3, JavaScript, React, and more. I have also worked on Backend Technologies like PHP, Node JS, and MySQL. I have worked on various projects during my career and have developed a strong understanding of the software development life cycle. I have a strong understanding of version control systems like Git and GitHub. I have also worked on various projects using different APIs and libraries.
                </p>
            </div>
        </div>
    );
}

export default About;