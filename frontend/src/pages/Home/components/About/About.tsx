import React from "react";

import "./styles/about.scss";

export default function About() {
	return (
		// <section className="about">
		// 	<div className="about__container">
		// 		<div className="about__content">
		// 			<div className="about__info">
		// 				<h3 className="about__desc info">We’re on a mission</h3>
		// 				<h2 className="about__title title">About Traifix</h2>
		// 			</div>
		//
		// 			<div className="about__left">
		// 				<p className="about__text">
		// 					Trusted by local people in <span style={{ color: "var(--span-color)" }}>Kazakhstan</span>
		// 				</p>
		// 				<p>
		// 					With the Gen Z going the video way, the future recruitment is going to be through video
		// 					resumes. It saves the HR people a ton of time in screening profiles. And it makes it more
		// 					human to present themselves than plain texts for the employees.
		// 					<br />
		// 					<br />
		// 					With 20+ years on the video production industry, you’re on the right hands.
		// 				</p>
		// 			</div>
		// 		</div>
		// 		<div className="about__logo">
		// 			<img src="/assets/images/logo_text.png" alt="logo" className="about__illustration" />
		// 		</div>
		// 	</div>
		// </section>
		<section className="about" id={"about"}>
			<div className="about__container">
				<div className="about__content">
					<div className="about__info">
						<h3 className="about__desc info">We’re on a mission</h3>
						<h2 className="about__title title">About Traifix</h2>
					</div>
					<article className="about__article">
						<h3 className="about__title">
							Trusted by local people in <span style={{ color: "var(--span-color)" }}>Kazakhstan</span>
						</h3>
						<p className="about__text text">
							With the Gen Z going the video way, the future recruitment is going to be through video
							resumes. It saves the HR people a ton of time in screening profiles. And it makes it more
							human to present themselves than plain texts for the employees.
							<br />
							<br />
							With 20+ years on the video production industry, you’re on the right hands.
						</p>
					</article>
				</div>
				<div className="about__logo">
					<img src="/assets/images/logo_text.png" alt="logo" className="about__illustration" />
				</div>
			</div>
		</section>
	);
}
