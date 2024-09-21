import { links, socials } from "../../data";
import LocalTime from "../utility/LocalTime";
import { IoIosArrowRoundUp } from "react-icons/io";

const Contact = () => {
	return (
		<section
			id="contact"
			className=" w-full relative pb-6 px-5 lg:px-16 text-darkGray mt-12 md:mt-24">
			<div className="heading-container ">
				{/* mail */}
				<div>
					<p
						className="text-center text-sm my-[8px]  tracking-tighter font-bold text-darkGray"
						data-scroll
						data-scroll-speed="0.08">
						Have an offer? Drop me an email :
					</p>
					<a
						href="mailto:fayasmuthalib@gmail.com"
						className="cursor-pointer hover:text-red-400 relative z-30 text-center">
						<p
							className="text-center text-2xl mb-[-8px]   font-bold text-darkGray"
							data-scroll
							data-scroll-speed="0.1">
							fayasmuthalib@gmail.com
						</p>
					</a>
				</div>

				{/* contact */}
				<div
					className="text-[3rem] md:text-[7rem] lg:text-[12.5rem]  text-lightBlack opacity-85 lg:tracking-[-0.4rem] leading-none flex flex-col text-center uppercase black-underline"
					data-scroll
					data-scroll-speed="0.2">
					<p className="py-4 ">Get in touch</p>
				</div>
			</div>

			{/* Grid container */}
			<div
				className="grid-container grid grid-cols-[1fr 1fr] lg:grid-cols-[50%_25%_1fr] gap-6 md:gap-12 md:py-6 mt-6"
				data-scroll
				data-scroll-speed="0.1">
				{/* Left grid */}
				<div className="hidden md:block">
					<p className="border-b border-black uppercase text-bold text-lg  tracking-tight">
						Navigation
					</p>
					<div className="flex flex-col mt-2 font-bold  text-darkWhite">
						{links.map((link) => (
							<a key={link.hash} href={link.hash} className="my-[4px] ">
								{link.name}
							</a>
						))}
					</div>
				</div>

				{/* Center Grid */}
				<div>
					<p className="border-b border-black uppercase text-bold text-lg  tracking-tight">
						Socials
					</p>
					<div className="flex flex-col mt-2 font-bold  text-darkWhite">
						{socials.map((social) => (
							<a
								key={social.link}
								href={social.link}
								className="my-[4px]"
								target="_blank">
								{social.name}
							</a>
						))}
					</div>
				</div>

				{/* Right column */}
				<div className="hidden md:block">
					<p className="border-b border-black uppercase text-bold text-lg tracking-tight  ">
						Resources
					</p>
					<div className="flex flex-col mt-2 font-bold  text-darkWhite">
						{/* <a
							href="https://github.com/stharavi01/react-portfolio.git"
							target="_blank">
							Portfolio V2 Source Code
						</a> */}
						<a
							href="https://stharaviportfolio.netlify.app"
							className="my-[4px]"
							target="_blank">
							Portfolio V1.6
						</a>
					</div>
				</div>

				{/* Bottom Left grid*/}
				<div className="text-base md:text-[1.5rem]  text-darkGray opacity-80 leading-tight flex flex-col text-left  ">
					<p> &copy; {new Date().getFullYear()}</p>
					<p>BuildWithUs</p>
				</div>

				{/* Bottom Center grid*/}
				<div className="text-base font-bold text-lightBlack opacity-85 text-left uppercase grid grid-cols-2">
					<LocalTime />
				</div>

				{/* Bottom right grid */}
				<div className="mx-auto flex relative ">
					<div className="bg-gray rounded-full md:w-[4.5rem] md:h-[4.5rem] md:flex justify-center items-center hover:bg-lightWhite transform hover:scale-105 transition-all cursor-pointer hidden">
						<a href="#about">
							<IoIosArrowRoundUp size={50} className="text-black" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
