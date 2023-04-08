import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../sections/Main/Main";
import About from "../../sections/About/About";
import Footer from "../../components/Footer/Footer";
import Features from "../../sections/Features/Features";
import Partners from "../../sections/Partners/Partners";

export default function Home() {
	return (
		<>
			<Header />
			
			<main className="page">
				<Main />
				<About />
				<Features />
				<Partners />
			</main>
			<Footer />
		</>
	);
}
