import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const videos = [
  { id: 1, src: "./src/assets/videos/mj.mp4", title: "MJ themed landing page" },
  { id: 2, src: "./src/assets/videos/moonlight.mp4", title: "Moon themed landing page" },
  { id: 3, src: "./src/assets/videos/tropics.mp4", title: "Island themed landing page" },
];

const CustomComponent = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((videoRef, index) => {
      // GSAP animation for each video
      gsap.fromTo(
        videoRef,
        {
          opacity: 0,
          y: 50, // Start 50px lower
        },
        {
          opacity: 1,
          y: 0, // End at original position
          scrollTrigger: {
            trigger: videoRef,
            start: "top 80%", // Trigger when the top of the video is 80% from the top of the viewport
            end: "top 30%", // Optional: define an end point for the animation
            scrub: true, // Smooth animation as you scroll
            // markers: true, // Uncomment to see the trigger markers during development
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="title text-4xl text-Black mb-6 text-center md:text-5xl lg:text-6xl">
        Parallax Custom Components
      </h1>
      <div className="flex flex-col items-center space-y-4 overflow-hidden">
        {videos.map((video, index) => (
          <div key={video.id} className="relative w-[70%] h-auto mx-auto">
            <video
              ref={(el) => (videoRefs.current[index] = el)} // Set the ref for each video
              src={video.src}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              loop
              muted
            />
            <h2 className="text-black text-center mt-2 text-2xl">{video.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomComponent;
