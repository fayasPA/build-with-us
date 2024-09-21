import React from "react";
import Timeline from "./Timeline";
import Skills from "./Skills";

const Experience = () => {
	return (
		<section
			id="experience"
			className="w-full h-full bg-lightBlack my-[5rem] md:my-[4rem] px-5"
			data-scroll-section>
			{/* heading */}
			<div className="py-12 text-center" data-scroll data-scroll-speed="0.2">
				<p className="my-heading-white md:ml-12">Our Experiences</p>
				<div className="white-underline"></div>{" "}
			</div>
			<Skills />
			<Timeline />
		</section>
	);
};

export default Experience;
