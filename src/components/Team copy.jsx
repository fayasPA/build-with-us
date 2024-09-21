import React from "react";
import Kiran from '../assets/images/kiran.jpeg'
// import Hafiz from '../assets/images/hafiz.jpeg'
import Hafiz from '../assets/images/cartoonHafiz.png'
import Fayas from '../assets/images/fayas.jpg'

const teamMembers = [
    {
        name: "Fayas P A",
        picture: Fayas,  // Replace with correct image path
        bio: "Fayas is a seasoned full-stack developer with a strong focus on React and modern web technologies. As the team lead, he oversees development and ensures seamless project delivery.",
        linkedIn: "https://www.linkedin.com/in/fayas-p-a-328748142/",
    },
    {
        name: "Varun MS",
        picture: Fayas,  // Replace with correct image path
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
        <section className="our-team py-10 bg-gray-100" data-scroll-section>
            <div className=" text-center" data-scroll data-scroll-speed="0.2">
                <p className="my-heading-black md:ml-12">Our Team</p>
                <div className="white-underline"></div>{" "}
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
                            <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
