import React from "react";
import { FirebaseAuthProvider } from "./context/FirebaseAuthContext";
import Main from "./sections/Main/Main";

export default function App() {
	return (
		<FirebaseAuthProvider>
			<Main />
		</FirebaseAuthProvider>
	);
}
