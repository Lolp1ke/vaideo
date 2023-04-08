import React from "react";
import { FirebaseAuthProvider } from "./context/FirebaseAuthContext";
import { Route, Routes } from "react-router-dom";

import "./assets/styles/default.scss";
import "./assets/styles/page.scss";

import Home from "./pages/Home/Home";

export default function App() {
	return (
		<FirebaseAuthProvider>
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/home"} element={<Home />} />
			</Routes>
		</FirebaseAuthProvider>
	);
}
