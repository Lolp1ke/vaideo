import React from "react";

interface SlideProps {
	text: string;
	name: string;
	description: string;
	image: string;
	rate: number;
	stars: JSX.Element[];
}

export default function Slide({ text, name, description, image, rate, stars }: SlideProps) {
	return (
		<div className="partners__slide">
			<div className="partners__slide-image">
				<img src={"/assets/partners/" + image} alt="astana-hub" />
			</div>
			<div className="partners__says">
				<p className="partners__text text">{text}</p>

				<article className="partners__article">
					<h3 className="partners__partner-name title">{name}</h3>
					<p className="partners__partner-desc text">{description}</p>
				</article>
				<div className="partners__rating">
					<p className="partners__rate">{rate}</p>
					<div className="partners__star">{stars}</div>
				</div>
			</div>
		</div>
	);
}
