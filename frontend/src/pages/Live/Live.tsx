import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Session from "./components/Session/Session";

export default function Live() {
	return (
		<>
			<Header />
			<main className="page">
				<Session />
			</main>
			<Footer />
		</>
	);
}
