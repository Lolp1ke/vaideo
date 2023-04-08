import React, { createContext, ReactNode, useContext } from "react";
import { firebaseFirestore } from "../api/Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

interface IGetLiveChat {
	caseId: string;
}

interface IChatData {
	userId: string;
	name: string;
	photoURL: string;
	text: string;
}

interface FirebaseFirestoreContextProps {
	getLiveChat: ({ caseId }: IGetLiveChat) => IChatData[];
}

const FirebaseFirestoreContext = createContext({} as FirebaseFirestoreContextProps);

export function useFirestore(): FirebaseFirestoreContextProps {
	return useContext(FirebaseFirestoreContext);
}

export function FirebaseFirestoreProvider({ children }: { children: ReactNode }) {
	function getLiveChat({ caseId }: IGetLiveChat) {
		let chatData: IChatData[] = [];

		const q = query(collection(firebaseFirestore, "live", `${caseId}/chat`));
		onSnapshot(q, (snapshot) => {
			snapshot.docChanges().forEach((doc) => {
				chatData.push(doc.doc.data() as IChatData);
			});
		});

		return chatData;
	}
	const values: FirebaseFirestoreContextProps = { getLiveChat };

	return <FirebaseFirestoreContext.Provider value={values}>{children}</FirebaseFirestoreContext.Provider>;
}
