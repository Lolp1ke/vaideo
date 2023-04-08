import React from "react";

import "./styles/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__blocks">
					<div className="footer__block">
						<a href={"#top"} className="footer__logo">
							<img src="/assets/logos/logo-car.png" alt="logo" className="footer__logo-image" />
							<h3 className="footer__title">Traifix</h3>
						</a>
						<p className="footer__description">
							Some mini description that all websites have.
							<br />
							Kazakhstan, Astana - 010000
						</p>
						<nav className="footer__links">
							<a href="https://facebook.com" className="footer__links-item">
								<img src="/assets/icons/facebook.svg" alt="facebook" />
							</a>
							<a href="https://instagram.com" className="footer__links-item">
								<img src="/assets/icons/instagram.svg" alt="instagram" />
							</a>
							<a href="https://twitter.com" className="footer__links-item">
								<img src="/assets/icons/twitter.svg" alt="twitter" />
							</a>
							<a href="https://linkedin.com" className="footer__links-item">
								<img src="/assets/icons/linked-in.svg" alt="linked-in" />
							</a>
						</nav>
					</div>
					<div className="footer__block">
						<h3 className="footer__title">Useful links</h3>
						<nav className="footer__list">
							<Link to={"/price"} className="footer__list-item">
								Payment & tax
							</Link>
							<Link to={"/terms-of-service"} className="footer__list-item">
								Terms of Service
							</Link>
							<Link to={"/privacy-policy"} className="footer__list-item">
								Privacy policy
							</Link>
							<Link to={"/profile"} className="footer__list-item">
								Your account
							</Link>
						</nav>
					</div>
					<div className="footer__block">
						<h3 className="footer__title">Our product</h3>
						<nav className="footer__list">
							<Link to={"/about"} className="footer__list-item">
								About us
							</Link>
							<Link to={"/contacts"} className="footer__list-item">
								Contacts
							</Link>
							<Link to={"/live"} className="footer__list-item">
								Live
							</Link>
							<Link to={"/analysis"} className="footer__list-item">
								Analysis
							</Link>
						</nav>
					</div>
					<div className="footer__block">
						<h3 className="footer__title">Newsletter</h3>

						<form className="footer__input">
							<input
								type="email"
								className="footer__input-field"
								placeholder={"example@mail.com"}
								required={true}
							/>
							<button className="footer__input-button" type={"submit"}>
								<img src="/assets/icons/send.svg" alt="send" />
							</button>
						</form>

						<a href="mailto:help@traifix.kz" className="footer__text">
							<img src="/assets/icons/mail.svg" alt="mail" /> help@traifix.kz
						</a>
						<a href="tel:88005553535" className="footer__text">
							<img src="/assets/icons/phone.svg" alt="phone" />
							8-800-555-3535
						</a>
					</div>
				</div>
				<h3 className="footer__copyright">© {new Date().getFullYear()} Traifix</h3>
			</div>
		</footer>
	);
}
