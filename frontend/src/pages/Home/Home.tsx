import React from "react";

import Header from "../../components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Partners from "./components//Partners/Partners";
import Goals from "./components/Goals/Goals";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="page">
				<Hero />
				<About />
				<Goals />
				<Features />
				<Partners />
			</main>
			<Footer />
		</>
	);
}
