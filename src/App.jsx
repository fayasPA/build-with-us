import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import SideNavbar from "./components/SideNavbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./index.css";
import About from "./components/About";
import OurTeam from "./components/Team";

const App = () => {
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});

		return () => {
			scroll.destroy();
		};
	}, []);

	return (
		<div data-scroll-container ref={scrollRef}>
			<SideNavbar />
			<Home />
			<Projects />
			<About />
			<OurTeam />
			<Experience />
			<Contact />
		</div>
	);
};

export default App;
