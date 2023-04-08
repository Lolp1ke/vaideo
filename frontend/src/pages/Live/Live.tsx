import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { urlParams } from "../../App";
import Chat from "./components/Chat/Chat";

export default function Live() {
	const urlCaseId = useParams<urlParams>().caseId!;

	return (
		<>
			<Header />
			<main className="page">
				<Chat caseId={urlCaseId} />
			</main>
			<Footer />
		</>
	);
}
