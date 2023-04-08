import React from "react";

import "./styles/hero.scss";

export default function Hero() {
	return (
		<section className="hero">
			<div className="hero__container">
				<div className="hero__content">
					<article className="hero__article">
						<h3 className="hero__desc info">Stand out of the crowd</h3>
						<h2 className="hero__title title">Create the Next Gen Video Registrar</h2>
						<p className="hero__text text">
							Eliminate car accidents quickly by providing necessary support with AI.
						</p>
						<button className="hero__button" type={"button"}>
							<img src="/assets/icons/play.svg" alt="play" draggable={false} />
							Watch demo
						</button>
					</article>
					<div className="hero__image">
						<img src="/assets/images/computer-vision.jpg" alt="Computer-vision" draggable={false} />
					</div>
				</div>

				<div className="hero__tools">
					<img src="/assets/icons/firebase.svg" alt="firebase" className="hero__tool" draggable={false} />
					<img src="/assets/icons/sass.svg" alt="sass" className="hero__tool" draggable={false} />
					<img src="/assets/icons/typescript.svg" alt="typescript" className="hero__tool" draggable={false} />
					<img src="/assets/icons/python.svg" alt="python" className="hero__tool" draggable={false} />
					<img src="/assets/icons/react.svg" alt="react" className="hero__tool" draggable={false} />
					<img src="/assets/icons/django.svg" alt="django" className="hero__tool" draggable={false} />
				</div>
			</div>
		</section>
	);
}
