import React from "react";
import { FirebaseAuthProvider } from "./context/FirebaseAuthContext";

import "./assets/styles/default.scss";
import "./assets/styles/page.scss";

import Header from "./components/Header/Header";
import Main from "./sections/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
	return (
		<FirebaseAuthProvider>
			<Header />
			<main className="page">
				<Main />
			</main>
			<Footer />
		</FirebaseAuthProvider>
	);
}
