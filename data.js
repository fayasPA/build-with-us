import React from 'react';
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
// images
import AmanimotorsImage from "./src/assets/images/amanimotors.png";
import LuxemotoImage from "./src/assets/images/luxemoto.png";
import ReactorImage from "./src/assets/images/appleImage.png";
import FizziImage from "./src/assets/images/appleImage.png";
// videos
import Luxemoto from "./src/assets/videos/luxmoto.mp4";
import Amanimotors from "./src/assets/videos/amanimotors.mp4";
import Reactor from "./src/assets/videos/reactor.mp4";
import Fizzi from "./src/assets/videos/fizzi.mp4";
// background image
import Bg1 from "./src/assets/images/bg-1.jpg";
import Bg2 from './src/assets/images/bg-2.jpg';
import Bg3 from './src/assets/images/bg-3.jpg';
import Bg4 from './src/assets/images/bg-4.jpeg';
import Bg5 from './src/assets/images/bg-5.jpeg';
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube, FaLaptopCode, FaBriefcase } from "react-icons/fa";

export const links = [
    {
        name: "About",
        number: "01",
        hash: "#about",
    },
    {
        name: "Projects",
        number: "02",
        hash: "#projects",
    },
    {
        name: "Experience",
        number: "03",
        hash: "#experience",
    },
    {
        name: "Contact",
        number: "04",
        hash: "#contact",
    },
];

export const socials = [
    {
        name: "Github",
        icon: React.createElement(FaGithub),
        link: "https://github.com/fayasPA"
    },
    {
        name: "LinkedIn",
        icon: React.createElement(FaLinkedinIn),
        link: "https://www.linkedin.com/in/fayas-p-a-328748142/"
    },
    {
        name: "Instagram",
        icon: React.createElement(FaInstagram),
        link: "https://www.instagram.com/__fayas_muthaleef__/"
    },
];

export const experiencesData = [
    {
        title: "Self-Learning from YouTube",
        location: "Remote",
        description:
            "Started our learning journey in 2022 by utilizing YouTube as a primary resource for mastering web development, focusing on React, JavaScript, and frontend technologies as well as LLM.",
        icon: React.createElement(FaYoutube), // YouTube icon for self-learning
        date: "2022",
        type: "study"
    },
    {
        title: "Open Source Contributions",
        location: "Remote",
        description:
            "In 2023, We began contributing to open-source projects. This helped me refine my coding skills and collaborate with developers worldwide on diverse projects, enhancing my understanding of best coding practices.",
        icon: React.createElement(FaLaptopCode), // Laptop code icon for open-source coding
        date: "2023",
        type: "work"
    },
    {
        title: "Freelance Web Developer",
        location: "Remote",
        description:
            "Started working as a freelance web development team for various businesses in 2024, developing custom web solutions, primarily using React, JavaScript, and modern web technologies to meet clients' needs.",
        icon: React.createElement(FaBriefcase), // Briefcase icon for freelance work
        date: "2024 - Present",
        type: "work"
    }
];

export const projectsData = [
    {
        title: "LuxeMoto",
        number: "01",
        description:
            "Luxemoto is a used car premium website used to showcase the stock of the cars available, It make use of react, gsap, etc at frontend and golang and postgres at the backend.",
        tags: ["React", "GSAP", "Tailwind", "GoLang"],
        videoUrl: Luxemoto,
        imageUrl: LuxemotoImage,
        background: Bg1,
        link: "https://luxemoto.in",
        githubLink: "https://github.com/fayasPA/luxe-moto"
    },
    {
        title: "Amanimotors",
        number: "02",
        description:
            "Amanimotors is a used car premium website used to showcase the stock of the cars available, It make use of react, gsap, etc at frontend and golang and postgres at the backend.",
        tags: ["React", "GSAP", "Tailwind", "GoLang"],
        videoUrl: Amanimotors,
        imageUrl: AmanimotorsImage,
        background: Bg2,
        link: "https://amanimotors.in",
        githubLink: "https://github.com/fayasPA/amani-motors"
    },
    {
        title: "Reactor",
        number: "03",
        description:
            "The iPhone 15 Pro website clone is a project built to learn advanced web technologies and design principles. It features smooth animations with GSAP, and uses React and Tailwind CSS for modern, visually appealing design.",
        tags: ["React", "Tailwind", "GSAP", "ThreeJS"],
        videoUrl: Reactor,
        imageUrl: ReactorImage,
        background: Bg3,
        link: "https://applesite-clone.netlify.app/",
        githubLink: "https://github.com/stharavi01/apple_website"
    },
    {
        title: "Fizzi Website",
        number: "04",
        description:
            "I created a stylish portfolio website using React, Tailwind CSS, and GSAP to showcase my projects. With easy navigation, polished design, and smooth animations, visitors can explore my work seamlessly. Every part of the site reflects my dedication to creativity and excellence in web development.",
        tags: ["React", "Tailwind", "GSAP"],
        videoUrl: Fizzi,
        imageUrl: FizziImage,
        background: Bg4,
        link: "https://stharavi.netlify.app/",
        githubLink: "rabinShrestha_resume"
    },

];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "React Native",
    "Python",
    "Django",
    "Django REST",
    "Go",
    "Git",
    "Tailwind",
    "Semantic UI",
    "Postgres",
    "MongoDB",
    "SQL",
    "Redux",
    "GSAP",
    "Docker",
    "Figma",
    "LLM",
    "Chatbots",
];