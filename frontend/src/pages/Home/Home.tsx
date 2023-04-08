import React from "react";

import Header from "../../components/Header/Header";
import Main from "../../sections/Main/Main";
import Footer from "../../components/Footer/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main className="page">
				<Main />
			</main>
			<Footer />
		</>
	);
}
