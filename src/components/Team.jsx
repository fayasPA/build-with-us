import React from "react";
// import Kiran from '../assets/images/kiran.jpeg'
// import Kiran from '../assets/images/kiranCartoon.png'
import Kiran from '../assets/images/kiranCartoon2.jpg'
// import Hafiz from '../assets/images/hafiz.jpeg'
import Hafiz from '../assets/images/hafizCartoon.png'
// import Hafiz from '../assets/images/hafizcartoon1.jpeg'
// import Hafiz from '../assets/images/hafizcartoon2.png'
// import Hafiz from '../assets/images/hafizcartoon3.jpg'
import Varun from '../assets/images/fayas.jpg'
import Fayas from '../assets/images/fayasCartoon.png'
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
    {
        name: "Fayas P A",
        picture: Fayas,  // Replace with correct image path
        bio: "Fayas is a seasoned full-stack developer with a strong focus on React and modern web technologies. As the team lead, he oversees development and ensures seamless project delivery.",
        linkedIn: "https://www.linkedin.com/in/fayas-p-a-328748142/",
    },
    {
        name: "Varun MS",
        picture: Varun,  // Replace with correct image path
        bio: "Varun specializes in Large Language Models (LLMs), artificial intelligence, and chatbot development. His innovative approach drives our AI-powered solutions.",
        linkedIn: "https://www.linkedin.com/in/fayas-p-a-328748142/",  // Update with Varun's actual LinkedIn URL
    },
    {
        name: "Kiran NJ",
        picture: Kiran,  // Replace with correct image path
        bio: "Kiran is a frontend React developer dedicated to delivering pixel-perfect UI designs. He collaborates with the backend team to build cohesive, high-performance web applications.",
        linkedIn: "https://www.linkedin.com/in/kiran-n-9600012b6/",
    },
    {
        name: "Hafiz Azeez",
        picture: Hafiz,  // Replace with correct image path
        bio: "Hafiz is a web designer with expertise in Figma and user experience design. He ensures that every project has a polished and professional look.",
        linkedIn: "https://www.linkedin.com/in/imhaafz/",
    }
];

const OurTeam = () => {
    return (
        <section
            id="Team"
            className="w-full relative pb-6 px-5 lg:px-16 text-darkGray mt-12 md:mt-24"
            data-scroll-section>
            <div className="mt-12 text-center" data-scroll data-scroll-speed="0.2">
                <p className="my-heading-black md:ml-12">Our Team</p>
                <div className="black-underline"></div>{" "}
            </div>
            <div className="container mx-auto" data-scroll data-scroll-speed="0.2">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member text-center p-6 bg-white shadow-lg rounded-lg mx-auto">
                            <img
                                src={member.picture}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.bio}</p>
                            <div className="w-full flex justify-center">
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                               <FaLinkedin size={35} />
                            </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
