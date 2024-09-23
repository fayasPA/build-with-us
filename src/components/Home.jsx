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
		animateElement("text4", 1.2, 200);
		// animateElement("text-right-el", 1.2, 200);
		gsap.from(`#text-right-el`, {
			opacity: 0,
			delay: 1.3,
			ease: "power1.inOut",
		});
	}, []);

	return (
		<div className="h-screen flex flex-col">
			<Navbar />
			<section className="flex-1 bg-black text-darkWhite flex" data-scroll-section>
				<div className="h-full w-[75%]">
					<div className="h-full flex flex-col justify-center lg:justify-start ">
						<div className="w-full flex items-center justify-start ">
							<div className="text-center" style={{ fontSize: 'clamp(2rem, 6vw, 20rem)', lineHeight: '1' }}>
								<div id="text1" className="inline-block" data-scroll data-scroll-speed="0.1">
									<span className="text-hover">E</span>
									<span className="text-hover">N</span>
									<span className="text-hover">D</span>
								</div>
								<div id="text2" className="inline-block" data-scroll data-scroll-speed="0.1">
									<span className="text-hover">-</span>
									<span className="text-hover">T</span>
									<span className="text-hover">O</span>
									<span className="text-hover">-</span>
									<span className="text-hover">E</span>
									<span className="text-hover">N</span>
									<span className="text-hover">D</span>
								</div>
							</div>
						</div>

						<div className="my-[-1rem] sm:my-[-1.5rem] md:my-[-2.5rem] lg:my-[-4.5rem] w-full flex justify-start">
							<div
								id="text3"
								className="text-[30cqw] text-center"
								style={{ fontSize: 'clamp(10rem, 30vw, 30rem)', lineHeight: '1' }}
								data-scroll
								data-scroll-speed="-0.1">
								<span className="text-hover">W</span>
								<span className="text-hover">E</span>
								<span className="text-hover">B</span>
							</div>
						</div>

						<div className="max-w-full flex justify-start ">
							<div
								id="text4"
								className="text-center"
								style={{ fontSize: 'clamp(3rem, 10vw, 15rem)', lineHeight: '1' }}
								data-scroll
								data-scroll-speed="-0.1">
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
				</div>
				<div id="text-right-el" className=" vertical-text flex justify-center lg:justify-start text-xl lg:text-2xl text-center flex-wrap">
					<p>Website dev | App Dev | design | AI | Chatbots</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
