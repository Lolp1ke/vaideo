import React from "react";

import "./styles/goals.scss";

export default function Goals() {
	return (
		<section className="goals">
			<div className="goals__container">
				<div className="goals__info">
					<h3 className="goals__desc info">We’re going to achieve</h3>
					<h2 className="goals__title title">Our future goals</h2>
				</div>
				<div className="goals__content">
					<div className="goals__card">
						<img src="/assets/icons/traffic.svg" alt="traffic" className="goals__icon" />
						<p className="goals__text text">Regulate local traffic lights</p>
					</div>
					<div className="goals__card">
						<img src="/assets/icons/buildings.svg" alt="buildings" className="goals__icon" />
						<p className="goals__text text">Expand all across the country</p>
					</div>
					<div className="goals__card">
						<img src="/assets/icons/human.svg" alt="human" className="goals__icon" />
						<p className="goals__text text">Collaborate with the Kazakhstani government</p>
					</div>
					<div className="goals__card">
						<img src="/assets/icons/car-crush.svg" alt="car-crush" className="goals__icon" />
						<p className="goals__text text">Provide analysis of the road accidents</p>
					</div>
				</div>
			</div>
		</section>
	);
}
