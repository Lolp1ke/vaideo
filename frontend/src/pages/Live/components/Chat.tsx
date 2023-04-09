import React from "react";
import { useFirestore } from "../../../context/FirebaseFirestoreContext";

interface LiveChatProps {
	caseId: string;
}

export default function Chat({ caseId }: LiveChatProps) {
	const { getLiveChat } = useFirestore();

	return (
		<section className="chat">
			<div className="chat__container">
				<p className="chat__session-id">Session {caseId}</p>
				<div className="chat__chat">
					{getLiveChat({ caseId: caseId }).map(() => {
						return <>
							
						</>;
					})}
				</div>
			</div>
		</section>
	);
}
