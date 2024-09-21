import { projectsData } from "../../data";
import ProjectsLeft from "./ProjectsLeft";
import ProjectsRight from "./ProjectsRight";

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full h-full text-darkGray px-5 mt-16 md:my-24 "
			data-scroll-section>
			{/* Heading */}
			<div className="mb-1rem " data-scroll data-scroll-speed="0.1">
				<div className="black-underline"></div>
				<p className="my-heading-black md:ml-12 ">Selected Projects</p>
				<div className="black-underline"></div>
			</div>
			<div className="sm:px-28 mt-12">
				{/* Projects */}
				{projectsData.map((project, index) => (
					<div key={index} className="md:mt-8">
						{/* for smaller screen */}
						<div className="flex flex-col md:hidden">
							<ProjectsLeft key={`left-${index}`} project={project} />
							<ProjectsRight key={`right-${index}`} project={project} />
						</div>

						{/* for medium screen and above */}
						<div className="hidden md:grid md:grid-cols-2 w-full gap-10">
							{index % 2 === 0 ? (
								<>
									<ProjectsLeft key={`left-${index}`} project={project} />
									<ProjectsRight key={`right-${index}`} project={project} />
								</>
							) : (
								<>
									<ProjectsRight key={`right-${index}`} project={project} />
									<ProjectsLeft key={`left-${index}`} project={project} />
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
