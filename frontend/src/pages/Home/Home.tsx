import React from "react";

import Header from "../../components/Header/Header";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Goals from "../../sections/Goals/Goals";
import Footer from "../../components/Footer/Footer";
import Features from "../../sections/Features/Features";
import Partners from "../../sections/Partners/Partners";

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
