import React, { useRef, useState, useEffect } from "react";
import { links, socials } from "../../data";
import gsap from "gsap";

const SideNavbar = () => {
	const navRefs = links.map(() => useRef(null));
	const [isOpen, setIsOpen] = useState(false);
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	// Event handler for mouse enter
	const handleMouseEnter = (ref) => {
		gsap.to(ref.current, {
			x: -25,  // Move to the left (negative x-axis) since the menu is on the right
			duration: 0.2,
			ease: "power1.inOut",
		});
	};

	// Event handler for mouse leave
	const handleMouseLeave = (ref) => {
		gsap.to(ref.current, {
			x: 0,
			duration: 0.5,
			ease: "power1.inOut",
		});
	};

	return (
		<>
			<div
				className={`bg-darkWhite md:w-8 md:h-8 lg:w-12 lg:h-12 sm:w-9 sm:h-9 fixed top-2 sm:top-3 lg:top-4 right-2 sm:right-4 z-50 rounded-full flex items-center justify-center transition-all ${!visible ? "transform scale-0" : "transform scale-100"
					}`}>
				{/* Hamburger menu button */}
				<label className="cursor-pointer">
					<div className="w-8 h-8 sm:w-9 sm:h-9 flex flex-col items-center justify-center">
						{/* Checkbox for controlling the state */}
						<input
							className="hidden peer"
							type="checkbox"
							checked={isOpen}
							onChange={toggleMenu}  // Linking checkbox to toggleMenu function
						/>
						{/* Hamburger/Cross icon lines */}
						<div
							className="w-[1rem] sm:w-[1.2rem] md:w-[1.2rem] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"
						></div>
						<div
							className="w-[1rem] sm:w-[1.2rem] md:w-[1.2rem] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"
						></div>
						<div
							className="w-[1rem] sm:w-[1.2rem] md:w-[1.2rem] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"
						></div>
					</div>
				</label>

			</div>


			{/* Side navigation menu */}
			<div
				className={`fixed top-0 right-0 h-full flex justify-center items-center w-64 md:w-96 text-2xl lg:text-4xl tracking-wide uppercase bg-lightBlack shadow-lg z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
					}`}>
				{/* Navigation menu */}
				<ul>
					{links.map((link, index) => (
						<li
							key={link.name}
							ref={navRefs[index]}
							className="p-4 space-y-6"
							onClick={toggleMenu}
							onMouseEnter={() => handleMouseEnter(navRefs[index])}
							onMouseLeave={() => handleMouseLeave(navRefs[index])}>
							<a
								href={link.hash}
								className="block p-3 rounded text-lightWhite hover:text-white">
								{link.name}
							</a>
						</li>
					))}
					<div className="flex mt-12 gap-6 text-white justify-center">
						{socials.map((social) => (
							<a
								onClick={toggleMenu}
								key={social.name}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
								className="icons-hover">
								<span className="">{social.icon}</span>
							</a>
						))}
					</div>
				</ul>
			</div>
		</>
	);
};

export default SideNavbar;
