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
	}, []);

	const handleReload = () => {
		window.location.reload();
	};

	return (
			<header
				className="font-semibold md:text-sm leading-tight text-darkWhite bg-black w-full flex justify-between px-6 lg:px-14 py-5 sm:px-10 border-b border-white border-opacity-30 lg:border-none">
				{/* Left column */}
				<div>
					<p
						id="my-name"
						onClick={handleReload}
						className="uppercase cursor-pointer text-darkWhite text-hover ">
						<span>cyfletech</span> 
						{/* <span className=""> with Us</span> */}
					</p>
				</div>

				{/* Right column */}
				
			</header>
	);
};
export default Navbar;
