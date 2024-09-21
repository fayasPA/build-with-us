import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsLeft = ({ project }) => {
	return (
		<div
			id="projectStagger"
			className="projects-left-container md:px-10 mb-8 md:mb-0  leading-normal flex flex-col justify-center"
			data-scroll
			data-scroll-speed="0.1">
			<p className="text-xl font-normal hidden md:block fade">
				<span>{`${project.number}.`} </span>
				<span className="text-lg">Featured Projects</span>
			</p>
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				<p className="text-2xl lg:text-4xl my-6 uppercase font-semibold fade">
					{project.title}
				</p>
			</a>
			<div className="project-description bg-softGray  text-lg rounded-lg p-4 leading-normal tracking-wide fade">
				<p>{project.description}</p>
				<div className="flex gap-4 mt-4 cursor-pointer opacity-75">
					<a
						href={project.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="icons-hover"
						aria-label="GitHub link">
						<FaGithub size={25} />
					</a>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="icons-hover"
						aria-label="External link">
						<FaExternalLinkAlt size={25} />
					</a>
				</div>
			</div>
			<div className="project-tags mt-6 flex flex-wrap gap-2 w-full fade">
				{project.tags.map((tag, index) => (
					<button
						key={index}
						className="project-tag-button px-3 py-1 sm:px-[12px] sm:py-[5px] text-sm sm:text-xs rounded-full border hover:text-slate-50 uppercase hover:bg-darkGray hover:border-white hover:text-white">
						{tag}
					</button>
				))}
			</div>
		</div>
	);
};

export default ProjectsLeft;
