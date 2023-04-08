import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "../api/Firebase";
import { User, UserCredential } from "@firebase/auth-types";

type currentUserType = User | null;

type emailType = { email: string };
interface IEmailAndPass extends emailType {
	password: string;
}

interface IUpdateUserInfo {
	displayName: string | null;
	photoURL: string | null;
}

interface FirebaseAuthContextProps {
	currentUser: currentUserType;
	signUp: ({ email, password }: IEmailAndPass) => Promise<UserCredential>;
	signIn: ({ email, password }: IEmailAndPass) => Promise<UserCredential>;
	signOut: () => Promise<void>;
	resetPass: ({ email }: emailType) => Promise<void>;
	confirmEmail: () => Promise<void> | null;
	updateUserInfo: ({ displayName, photoURL }: IUpdateUserInfo) => Promise<void> | null;
}

const FirebaseAuthContext = createContext({} as FirebaseAuthContextProps);

export function useAuth(): FirebaseAuthContextProps {
	return useContext(FirebaseAuthContext);
}

export function FirebaseAuthProvider({ children }: { children: ReactNode }) {
	const [currentUser, setCurrentUser] = useState<currentUserType>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	function signUp({ email, password }: IEmailAndPass) {
		return firebaseAuth.createUserWithEmailAndPassword(email, password);
	}

	function signIn({ email, password }: IEmailAndPass) {
		return firebaseAuth.signInWithEmailAndPassword(email, password);
	}

	function signOut() {
		return firebaseAuth.signOut();
	}

	function resetPass({ email }: emailType) {
		return firebaseAuth.sendPasswordResetEmail(email);
	}

	function confirmEmail() {
		if (!firebaseAuth.currentUser) return null;

		return firebaseAuth.currentUser.sendEmailVerification();
	}

	function updateUserInfo({ displayName, photoURL }: IUpdateUserInfo) {
		if (!firebaseAuth.currentUser) return null;

		return firebaseAuth.currentUser.updateProfile({
			displayName: displayName ? displayName : firebaseAuth.currentUser.displayName,
			photoURL: photoURL ? photoURL : firebaseAuth.currentUser.photoURL,
		});
	}

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setIsLoading(false);
		});
	}, []);

	const values: FirebaseAuthContextProps = {
		currentUser,
		signUp,
		signIn,
		resetPass,
		confirmEmail,
		updateUserInfo,
		signOut,
	};

	return <FirebaseAuthContext.Provider value={values}>{!isLoading && children}</FirebaseAuthContext.Provider>;
}
