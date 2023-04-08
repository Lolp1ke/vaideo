import React, { useRef, useState } from "react";
import { useAuth } from "../../context/FirebaseAuthContext";

import "./styles/auth.scss";

interface AuthProps {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
	isVisible: boolean;
	setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Auth({ isLogin, setIsLogin, isVisible, setIsVisible }: AuthProps) {
	const { signIn, signUp, resetPass, updateUserInfo } = useAuth();

	const [isResetPass, setIsResetPass] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);

	async function handleSubmit() {
		if (!emailRef.current) return;
		if (!passwordRef.current) return;
		if (passwordRef.current.value.length < 8) return;
		if (!nameRef.current) return;

		setIsLoading(true);

		try {
			if (isLogin && !isResetPass) {
				await signIn({ email: emailRef.current.value, password: passwordRef.current.value });
			} else if (!isLogin) {
				await signUp({ email: emailRef.current.value, password: passwordRef.current.value });

				await updateUserInfo({
					displayName: nameRef.current.value,
					photoURL: "https://placekitten.com/100/100",
				})
					?.then((r) => {
						console.log(r);
					})
					.catch((err) => {
						console.log(err);
					});
			} else if (isResetPass) {
				await resetPass({ email: emailRef.current.value });
			}
		} catch (err) {
			console.log(err);
		}

		setIsVisible(false);
		setIsLoading(false);
		document.documentElement.style.overflow = "auto";
	}

	return (
		<section className="auth" style={{ display: isVisible ? "flex" : "none" }}>
			<div className="auth__container">
				<button
					className="auth__close"
					type={"button"}
					onClick={() => {
						setIsVisible(false);
						setIsResetPass(false);
						document.documentElement.style.overflow = "auto";
					}}
				>
					<img src="/assets/icons/close.svg" alt="X" />
				</button>
				<h3 className="auth__text">
					{isLogin ? (isResetPass ? "Password reset" : "Welcome back") : "Create an account"}
				</h3>
				<form
					onSubmit={(e) => {
						e.preventDefault();

						handleSubmit().then();
					}}
					className="auth__form"
				>
					<input
						type="text"
						className="auth__input"
						placeholder={"Name"}
						ref={nameRef}
						required={!isLogin && !isResetPass}
						style={{ display: isLogin ? "none" : isResetPass ? "none" : "inline-block" }}
					/>
					<input
						type="email"
						className="auth__input"
						placeholder={"Example@mail.com"}
						ref={emailRef}
						required={true}
					/>
					<input
						type="password"
						className="auth__input"
						placeholder={"At least 8 chars"}
						ref={passwordRef}
						style={{ display: isResetPass ? "none" : "inline-block" }}
						required={isLogin && !isResetPass}
					/>

					<button className="auth__submit" disabled={isLoading}>
						{isLogin ? (isResetPass ? "Send mail" : "Sign In") : "Sing Up"}
					</button>

					<div className="auth__actions">
						<button
							className="auth__action"
							type={"button"}
							onClick={() => {
								setIsLogin((prevState) => !prevState);
							}}
						>
							{isLogin ? "First time?" : "Registered?"}
						</button>
						<button
							className="auth__action"
							style={{ display: isLogin ? "block" : "none" }}
							type={"button"}
							onClick={() => {
								setIsResetPass((prevState) => !prevState);
							}}
						>
							{isResetPass ? "Remember" : "Forgot password"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
