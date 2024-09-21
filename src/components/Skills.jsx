import { skillsData } from "../../data";

const Skills = () => {
	return (
		<section id="Skills" className="w-full text-center mb-4">
			<h1
				className="text-lightWhite md:ml-12 text-lg font-bold "
				data-scroll
				data-scroll-speed="0.2">
				Some technologies We've worked with recently:
			</h1>
			<div
				className="md:w-2/4 mx-auto mt-8 md:mt-0"
				data-scroll
				data-scroll-speed="0.2">
				{skillsData.map((skill, index) => (
					<button
						key={index}
						className="px-3 py-[5px] my-5 mt-[-0.4rem] text-sm rounded-full border hover:text-slate-50 uppercase hover:bg-lightWhite hover:border-black hover:text-lightBlack border-white mx-1 md:mx-2 text-lightWhite ">
						{skill}
					</button>
				))}
			</div>
		</section>
	);
};
export default Skills;
