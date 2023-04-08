import React, { useState } from "react";

import "./styles/header.scss";
import Auth from "../Auth/Auth";
import { useAuth } from "../../context/FirebaseAuthContext";

export default function Header() {
	const { currentUser, signOut } = useAuth();

	const [authState, setAuthState] = useState<boolean>(false);
	const [isLogin, setIsLogin] = useState<boolean>(false);

	return (
		<header className="header">
			<div className="header__container">
				<a href={"#top"} className="header__logo">
					<img src="/assets/logos/logo.png" alt="logo" className="header__logo-image" draggable={false} />
					<h1 className="header__logo-text">Traifix</h1>
				</a>
				<nav className="header__navbar">
					<a href={"#about"} className="header__navbar-item">
						About
					</a>
					<a href={"#live"} className="header__navbar-item">
						Live
					</a>
					<a href={"#contact"} className="header__navbar-item">
						Contact
					</a>
				</nav>
				<div className="header__auth" style={{ display: currentUser ? "none" : "flex" }}>
					<button
						className="header__auth-button"
						type={"button"}
						onClick={() => {
							setIsLogin(true);
							setAuthState(true);
							document.documentElement.style.overflow = "hidden";
						}}
					>
						Sign In
					</button>
					<button
						className="header__auth-button filled"
						type={"button"}
						onClick={() => {
							setIsLogin(false);
							setAuthState(true);
							document.documentElement.style.overflow = "hidden";
						}}
					>
						Sign Up
					</button>
				</div>
				<div className="header__profile" style={{ display: currentUser ? "flex" : "none" }}>
					<div className="header__profile-info">
						<p className="header__profile-name">{currentUser?.displayName}</p>
						<button className="header__profile-signout" type={"button"} onClick={signOut}>
							Sign out
						</button>
					</div>
					<img
						src={currentUser?.photoURL || ""}
						alt="profile"
						className="header__profile-image"
						draggable={false}
					/>
				</div>
			</div>
			<Auth isVisible={authState} setIsVisible={setAuthState} isLogin={isLogin} setIsLogin={setIsLogin} />
		</header>
	);
}
