import React from "react";

import "./styles/features.scss";

export default function Features() {
	return (
		<section className="features">
			<div className="features__container">
				<div className="features__info">
					<h3 className="features__desc info">Simple steps to glory</h3>
					<h2 className="features__title title">Our features</h2>
				</div>

				<div className="features__content">
					<div className="features__illustration">
						<img
							src="/assets/images/features.png"
							alt="car accident"
							className="features__image"
							draggable={false}
						/>
						<div className="features__info-block">
							<img
								src="/assets/icons/check-circle.svg"
								alt="check"
								className="features__info-image"
								draggable={false}
							/>
							<article className="features__article">
								<h4 className="features__title title">Solved cases</h4>
								<p className="features__text text">7k+ accidents</p>
							</article>
						</div>
					</div>
					
					<div className="features__blocks">
						<div className="features__block">
							<p className="features__number">01</p>
							<img
								src="/assets/icons/user.svg"
								alt="user"
								className="features__block-image"
								draggable={false}
							/>
							<article className="features__article">
								<h4 className="features__title title">Create an account</h4>
								<p className="features__text text">
									It is optional creating of account. You can do this by clicking on the Sign up
									button above.
								</p>
							</article>
						</div>
						<div className="features__block">
							<p className="features__number">02</p>
							<img
								src="/assets/icons/ai.svg"
								alt="ai"
								className="features__block-image"
								draggable={false}
							/>
							<article className="features__article">
								<h4 className="features__title title">Integrated AI </h4>
								<p className="features__text text">
									We provide the control to cameras to prevent accidents. We’ve more than 150+
									cameras.
								</p>
							</article>
						</div>
						<div className="features__block">
							<p className="features__number">03</p>
							<img
								src="/assets/icons/film.svg"
								alt="film"
								className="features__block-image"
								draggable={false}
							/>
							<article className="features__article">
								<h4 className="features__title title">Check on the Web</h4>
								<p className="features__text text">
									Watch video clip(s) of accidents and give verdict. All these can be done on the web.
								</p>
							</article>
						</div>
						<div className="features__block">
							<p className="features__number">04</p>
							<img
								src="/assets/icons/chip.svg"
								alt="chip"
								className="features__block-image"
								draggable={false}
							/>
							<article className="features__article">
								<h4 className="features__title title">Every frame</h4>
								<p className="features__text text">
									Website can demonstrate every second with images to clarify the situation.
								</p>
							</article>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
