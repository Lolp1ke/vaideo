import React from "react";

interface SlideProps {
	image: string;
}

export default function Slider({ image }: SlideProps) {
	return (
		<div className="partners__slide">
			<div className="partners__slide-image">
				<img src={"/assets/partners/" + image} alt="partners" />
			</div>
			<div className="partners__slide-image">
				<img src={"/assets/partners/" + image} alt="partners" />
			</div>
			<div className="partners__slide-image">
				<img src={"/assets/partners/" + image} alt="partners" />
			</div>
		</div>
	);
}
