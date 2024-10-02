import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const tabsData = [
  {
    title: "Full Stack Web Development",
    content: "We offer comprehensive end-to-end development solutions tailored to your unique business requirements."
  },
  {
    title: "Custom Generative AI Solutions",
    content: "Our custom generative AI solutions are designed to elevate your business productivity."
  },
  {
    title: "Business Analytics",
    content: "We provide bespoke business analytics services that empower you to make informed decisions."
  },
  {
    title: "Chatbot Development",
    content: "Our custom chatbot development services create intelligent conversational agents that provide exceptional customer support."
  }
];

const AnimatedTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // GSAP Animation on tab change
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },  // Animation starts with content off screen
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }  // Animate into view
    );
  }, [activeTab]);  // Runs when the activeTab changes

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="flex space-x-4 mb-6">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-lg rounded-lg focus:outline-none transition-all duration-300 ease-in-out ${
              activeTab === index
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-300"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="relative bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg">
        <div ref={contentRef}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {tabsData[activeTab].title}
          </h3>
          <p className="text-gray-700">{tabsData[activeTab].content}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedTabs;
