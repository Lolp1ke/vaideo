import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../sections/Main/Main";
import Footer from "../../components/Footer/Footer";
import Features from "../../sections/Features/Features";

export default function Home() {
	return (
		<>
			<Header />
			<main className="page">
				<Main />
				<Features />
			</main>
			<Footer />
		</>
	);
}
