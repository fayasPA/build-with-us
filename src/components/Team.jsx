import React from "react";

import { FaLinkedin, FaUser } from "react-icons/fa";
import { teamMembers } from "../../data";



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
                            {member.picture ? <img
                                src={member.picture}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                            />: (<FaUser className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />)}
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-600 mb-4">{member.bio}</p>
                            <div className="w-full flex justify-center">
                            {member.linkedIn && <a
                                href={member.linkedIn}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 font-medium"
                            >
                               <FaLinkedin size={35} />
                            </a>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
