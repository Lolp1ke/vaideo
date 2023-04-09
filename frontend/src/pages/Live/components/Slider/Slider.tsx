import React from "react";

interface SlideProps {
	id:string
	image: string;
}

export default function Slider({image, id}: SlideProps) {
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