import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Comprehensive end-to-end development solutions tailored to your business needs.",
  },
  {
    title: "Custom Generative AI Solutions",
    description:
      "Leverage advanced AI to automate processes and enhance creativity.",
  },
  {
    title: "Business Analytics",
    description:
      "Transform data into actionable intelligence for strategic planning.",
  },
  {
    title: "Chatbot Development",
    description:
      "Create intelligent conversational agents for exceptional customer support.",
  },
  {
    title: "Proof of Concept",
    description:
      "Validate AI project feasibility with custom proof of concept services.",
  },
  {
    title: "AI Tools Training",
    description:
      "Corporate training programs to empower your team with AI tools.",
  },
];

const Services = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { scale: 1, opacity: 1 },
        {
          scale: 1.05,
          opacity: 0.9,
          paused: true,
          duration: 0.5,
          ease: "power2.out",
          onReverseComplete: () => gsap.to(card, { scale: 1, opacity: 1 }),
        }
      );
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1.1, opacity: 1, duration: 0.4 });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], { scale: 1, opacity: 0.9, duration: 0.4 });
  };

  return (
    <div
			id="services"
      className="bg-gray-100 flex flex-col items-center justify-center p-10">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Services We Offer
      </h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-600 opacity-1 group-hover:opacity-100 transition-opacity duration-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
