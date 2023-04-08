import React from "react";
import { FirebaseAuthProvider } from "./context/FirebaseAuthContext";
import { FirebaseFirestoreProvider } from "./context/FirebaseFirestoreContext";
import { Route, Routes } from "react-router-dom";

import "./assets/styles/default.scss";
import "./assets/styles/page.scss";

import Home from "./pages/Home/Home";
import Live from "./pages/Live/Live";

export type urlParams = {
	caseId: string;
};

export default function App() {
	return (
		<FirebaseFirestoreProvider>
			<FirebaseAuthProvider>
				<Routes>
					<Route path={"/"} element={<Home />} />
					<Route path={"/home"} element={<Home />} />
					<Route path={"/live/:caseId"} element={<Live />} />
				</Routes>
			</FirebaseAuthProvider>
		</FirebaseFirestoreProvider>
	);
}
