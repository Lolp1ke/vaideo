import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../sections/Main/Main";
import Footer from "../../components/Footer/Footer";
import Features from "../../sections/Features/Features";
import Partners from "../../sections/Partners/Partners";

export default function Home() {
	return (
		<>
			<Header />
			<main className="page">
				<Main />
				<Features />
				<Partners />
			</main>
			<Footer />
		</>
	);
}
