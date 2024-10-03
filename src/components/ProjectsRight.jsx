import React, { useState, useRef, useEffect } from "react";
import LazyVideo from "../utility/LazyVideo";

const ProjectsRight = ({ project }) => {
	const videoRef = useRef(null);
	const [isHovered, setIsHovered] = useState(false);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

	const handleMouseMove = (event) => {
		const rect = videoRef.current.getBoundingClientRect();
		const newX = event.clientX - rect.left;
		const newY = event.clientY - rect.top;

		// Smoothly update mouse position
		setMousePosition((prevPosition) => ({
			x: prevPosition.x + (newX - prevPosition.x) * 0.08,
			y: prevPosition.y + (newY - prevPosition.y) * 0.08,
		}));
	};

	useEffect(() => {
		const handleResize = () => {
			const { width, height } = videoRef.current.getBoundingClientRect();
			setContainerSize({ width, height });
		};

		// Initial size calculation
		handleResize();

		// Event listener for resizing
		window.addEventListener("resize", handleResize);

		// Cleanup on unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			data-scroll
			data-scroll-speed="0.4"
			className="h-[16rem] md:h-[24rem] lg:h-[28rem] w-full mb-14 md:mb-0 md:px-10 flex flex-col justify-center items-center cursor-pointer relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onMouseMove={handleMouseMove}>
			<div
				className="h-fit w-full flex flex-col items-center justify-center "
				style={{
					// backgroundColor: "black",
					// backgroundImage: `url(${project.background})`,
					backgroundBlendMode: "overlay",
					position: "relative",
					// overflow: "hidden",
				}}
				ref={videoRef}>
				<a href={project.link} target="_blank">
					<LazyVideo
						className="pointer-events-none shadow-xl shadow-black rounded-2xl"
						autoPlay
						muted
						loop
						playsInline
						src={project.videoUrl}
						type="video/mp4"
						style={{ transform: "scaleY(1.2)" }}
					/>
				</a>

				{isHovered && (
					<div
						className="absolute z-50 flex items-center justify-center bg-black text-softGray rounded-full pointer-events-none"
						style={{
							width: "100px",
							height: "100px",
							left: `${mousePosition.x - 40}px`,
							top: `${mousePosition.y - 50}px`,
							padding: "8px",
							opacity: 0.8,
						}}>
						<span>View Site</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectsRight;
