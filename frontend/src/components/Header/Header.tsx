import React from "react";

import "./styles/header.scss";

export default function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<a href={"#top"} className="header__logo">
					<img src="/assets/logos/logo.jpg" alt="logo" className="header__logo-image" />
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
				<div className="header__auth">
					<button className="header__auth-button">Sign In</button>
					<button className="header__auth-button filled">Sign Up</button>
				</div>
			</div>
		</header>
	);
}
