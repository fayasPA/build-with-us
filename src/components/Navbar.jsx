import { GoDownload } from "react-icons/go";
import Resume from "../assets/rabinShrestha_resume.pdf";
import SideNavbar from "./SideNavbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
	useGSAP(() => {
		gsap.from("#my-name", {
			opacity: 0,
			duration: 0.6,
			y: -50,
			ease: "power1.inOut",
		});
		gsap.from("#my-nav", {
			opacity: 0,
			duration: 0.6,
			y: -50,
			ease: "sine.in",
		});
	}, []);

	const handleReload = () => {
		window.location.reload();
	};

	return (
		<>
			<header
				id="about"
				className="font-semibold md:text-sm leading-tight text-darkWhite bg-black w-full grid grid-cols-[20%_1fr] lg:grid-cols-2 gap-20 md:gap-50 px-6 lg:px-14 py-5 sm:px-10 border-b border-white border-opacity-30 lg:border-none">
				{/* Left column */}
				<div>
					<p
						id="my-name"
						onClick={handleReload}
						className="ml-16 uppercase cursor-pointer text-darkWhite text-hover ">
						<span>Build</span> <span className="block"> with Us</span>
					</p>
					<SideNavbar />
				</div>

				{/* Right column */}
				<div
					id="my-nav"
					className="flex flex-col md:flex-row gap-y-4 items-end md:justify-between">
					<p className=" uppercase sm:flex text-hover md:w-[30%] hidden ">
						Full Stack Development | AI | Design | App Development
					</p>

					{/* <p className=" items-center text-hover text-wrap md:w-1/4 hidden sm:block">
						Open for offers & internships -
					</p> */}

					<div className="justify-end">
						<a href={Resume} download="rabinShrestha_resume.pdf">
							<button className="px-4 py-2 lg:mt-[-0.4rem] text-sm rounded-full border hover:text-slate-50 flex items-center gap-1 cursor-pointer text-hover">
								Resume <GoDownload />
							</button>
						</a>
					</div>
				</div>
			</header>
		</>
	);
};
export default Navbar;
