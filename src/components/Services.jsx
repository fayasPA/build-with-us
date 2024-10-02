import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Services.css';  // Optional for custom styles
import { services } from "../../data";

gsap.registerPlugin(ScrollTrigger);



const Services = () => {
  const containerRef = useRef(null);
  const serviceRefs = useRef([]);

  useEffect(() => {
    // Create the scroll animation
    serviceRefs.current.forEach((service, index) => {
      gsap.fromTo(service, 
        { opacity: 0, y: 50 },  // Initial state
        { 
          opacity: 1, 
          y: 0, 
          scrollTrigger: {
            trigger: service,
            start: "top 80%",
            end: "top 60%",
            scrub: 1,
            toggleActions: "play none none reverse",
          }
        });
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-gray-900 min-h-screen">
      <h1 className="text-center text-white text-4xl font-bold py-10">Our Services</h1>
      <div className="flex flex-col items-center space-y-10 pb-20">
        {services.map((service, index) => (
          <div 
            key={index} 
            ref={el => serviceRefs.current[index] = el} 
            className="service-card bg-white text-gray-800 max-w-3xl p-6 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out"
          >
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
