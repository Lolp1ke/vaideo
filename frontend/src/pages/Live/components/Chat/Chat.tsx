import React, { useRef, useState } from "react";
import { useAuth } from "../../../../context/FirebaseAuthContext";
import { IChatData, useFirestore } from "../../../../context/FirebaseFirestoreContext";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firebaseFirestore } from "../../../../api/Firebase";

import "./styles/chat.scss";

interface LiveChatProps {
	caseId: string;
}

export default function Chat({ caseId }: LiveChatProps) {
	const { currentUser } = useAuth();
	const { createChatMessage } = useFirestore();

	const [chatMessages, setChatMessages] = useState<IChatData[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const messageRef = useRef<HTMLInputElement>(null);

	function getLiveChat({ caseId }: { caseId: string }) {
		let chatData: IChatData[] = [];
		const q = query(collection(firebaseFirestore, "live", `${caseId}/chat`));
		try {
			onSnapshot(q, (snapshot) => {
				snapshot.docChanges().forEach((doc) => {
					if (doc.type === "added") {
						chatData.push(doc.doc.data() as IChatData);
					}
				});

				setChatMessages(chatData);
			});
		} catch (err) {
			console.log(err);
		}

		return chatMessages;
	}

	console.log();
	async function handleCreateMessage() {
		if (!currentUser) return;
		if (!messageRef.current) return;

		setIsLoading(true);

		const time: number = new Date().getTime();

		console.log(time);

		await createChatMessage({
			caseId: caseId,
			userId: currentUser.uid,
			name: currentUser.displayName!,
			photoURL: currentUser.photoURL!,
			text: messageRef.current.value,
			messageId: time,
		}).then(() => {
			setIsLoading(false);
		});

		messageRef.current.value = "";
	}

	return (
		<section className="chat">
			<div className="chat__container">
				<p className="chat__session-id">Session {caseId}</p>
				<div className="chat__chat">
					{getLiveChat({ caseId: caseId }).map((bubble) => {
						return (
							<div
								className={
									"chat__bubble " +
									(currentUser && currentUser.uid === bubble.userId ? "this-user" : "")
								}
								key={bubble.messageId}
							>
								<div className="chat__bubble-user">
									<img src={bubble.photoURL} alt="user" className="chat__bubble-photo" />
									<p className="chat__bubble-name">{bubble.name}</p>
								</div>
								<p className="chat__bubble-text">{bubble.text}</p>
							</div>
						);
					})}
				</div>

				<form
					className="chat__input"
					onSubmit={(e) => {
						e.preventDefault();

						handleCreateMessage().then();
					}}
				>
					<input type="text" className="chat__input-field" ref={messageRef} required={true} />
					<button className="chat__button" type={"submit"} disabled={isLoading}>
						<img src="/assets/icons/send-2.svg" alt="send" />
					</button>
				</form>
			</div>
		</section>
	);
}
