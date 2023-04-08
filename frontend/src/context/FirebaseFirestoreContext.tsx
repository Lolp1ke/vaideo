import React, { createContext, ReactNode, useContext } from "react";
import { firebaseFirestore } from "../api/Firebase";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";

interface IGetLiveChat {
	caseId: string;
}
interface ICreateChatMessage extends IGetLiveChat, IChatData {}

export interface IChatData {
	userId: string;
	name: string;
	photoURL: string;
	text: string;
	messageId: number;
}

interface FirebaseFirestoreContextProps {
	getLiveChat: ({ caseId }: IGetLiveChat) => Promise<IChatData[]>;
	createChatMessage: ({ caseId, userId, name, text, photoURL }: ICreateChatMessage) => Promise<void>;
}

const FirebaseFirestoreContext = createContext({} as FirebaseFirestoreContextProps);

export function useFirestore(): FirebaseFirestoreContextProps {
	return useContext(FirebaseFirestoreContext);
}

export function FirebaseFirestoreProvider({ children }: { children: ReactNode }) {
	function createChatMessage({ caseId, userId, photoURL, text, name, messageId }: ICreateChatMessage) {
		const chatCollection = collection(firebaseFirestore, `live/${caseId}/chat`);

		return setDoc(doc(chatCollection, messageId.toString()), {
			userId: userId,
			name: name,
			photoURL: photoURL,
			text: text,
			messageId: messageId,
		} as IChatData);
	}
	async function getLiveChat({ caseId }: IGetLiveChat) {
		let chatData: IChatData[] = [];

		const q = query(collection(firebaseFirestore, "live", `${caseId}/chat`));
		await onSnapshot(q, (snapshot) => {
			snapshot.docChanges().forEach((doc) => {
				if (doc.type === "added") {
					chatData.push(doc.doc.data() as IChatData);
				}
			});
		});

		return chatData;
	}
	const values: FirebaseFirestoreContextProps = { getLiveChat, createChatMessage };

	return <FirebaseFirestoreContext.Provider value={values}>{children}</FirebaseFirestoreContext.Provider>;
}
