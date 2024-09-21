import { BsArrowDown } from "react-icons/bs";
import LocalTime from "../utility/LocalTime";


const About = () => {

    return (

        <section
            className="w-full h-full bg-lightBlack my-[5rem] md:py-[4rem] px-5"
            data-scroll-section>
            {/* heading */}
            <div className="py-12 text-center" data-scroll data-scroll-speed="0.2">
                <p className="my-heading-white md:ml-12">About Us</p>
                <div className="white-underline"></div>{" "}
            </div>
            <div className="w-full text-center mb-4" data-scroll data-scroll-speed="0.2">
                <span className="text-lg font-semibold text-lightWhite leading-none">
                    We are a full stack development team based in Kerala, India, specializing in building powerful digital solutions by seamlessly integrating frontend and backend technologies. Our team has extensive experience in designing sleek user interfaces using React, developing robust backends with Django and Golang, and ensuring scalability with PostgreSQL databases.

                    Beyond traditional web development, we also focus on advanced AI-driven solutions, including LLM (Large Language Models) and chatbot development, bringing cutting-edge machine learning to real-world applications. With our combined expertise in design, development, and AI, we transform ideas into impactful and innovative digital experiences.
                </span>
                {/* Local time */}
                <a href="#experience">
                    <div className="mt-10 md:mt-4 flex items-center justify-between">
                        <LocalTime />
                        <BsArrowDown size={20} className="text-hover mt-4" />
                    </div>
                </a>
            </div>
        </section>



    );
};

export default About;
