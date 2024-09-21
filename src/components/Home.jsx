import { BsArrowDown } from "react-icons/bs";
import Navbar from "./Navbar";
import LocalTime from "../utility/LocalTime";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const animateElement = (elementId, delay, yValue) => {
	gsap.from(`#${elementId}`, {
		opacity: 0,
		y: yValue,
		delay,
		ease: "power1.inOut",
	});
};

const Home = () => {
	useGSAP(() => {
		animateElement("text1", 0.8, 100);
		animateElement("text2", 0.8, 100);
		animateElement("text3", 1, 200);
	}, []);

	return (
		<>
			<Navbar />
			<section
				id="headings"
				className="h-[95vh] md:h-screen w-full relative px-5 md:px-10 bg-black text-darkWhite"
				data-scroll-section>
				<div className="heading-container">
					<div className="text-[5rem] md:text-[4rem] pt-5 lg:text-[13rem] lg:tracking-[-1.4rem] md:tracking-normal sm:tracking-normal leading-none flex flex-col">
						<div>
							<div
								id="text1"
								className="inline-block"
								data-scroll
								data-scroll-speed="0.1">
								<span className="text-hover">E</span>
								<span className="text-hover">N</span>
								<span className="text-hover">D</span>
							</div>
							<div
								id="text2"
								className="inline-block"
								data-scroll
								data-scroll-speed="0.1">
								<span className="text-hover">-</span>
								<span className="text-hover">T</span>
								<span className="text-hover">O</span>
								<span className="text-hover">-</span>
								<span className="text-hover">E</span>
								<span className="text-hover">N</span>
								<span className="text-hover">D</span>
							</div>
						</div>
						<div
							id="text3"
							className="flex flex-row flex-wrap md:flex-row sm:flex-col md:mt-[-2rem]"
							data-scroll
							data-scroll-speed="-0.1">
							<span className="text-hover">W</span>
							<span className="text-hover">E</span>
							<span className="text-hover">B</span>
							<span className="text-hover">-</span>
							<span className="text-hover">S</span>
							<span className="text-hover">O</span>
							<span className="text-hover">L</span>
							<span className="text-hover">U</span>
							<span className="text-hover">T</span>
							<span className="text-hover">I</span>
							<span className="text-hover">O</span>
							<span className="text-hover">N</span>
							<span className="text-hover">S</span>
						</div>
					</div>

				</div>

			</section>
		</>
	);
};

export default Home;
