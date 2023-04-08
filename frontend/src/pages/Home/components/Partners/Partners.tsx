import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "./styles/partners.scss";

import "swiper/scss";
import "swiper/css/navigation";

import Slide from "../Features/componets/Slide";

interface partnersProps {
	text: string;
	name: string;
	description: string;
	image: string;
	rate: number;
}

const partners: partnersProps[] = [
	{
		text: "“Computer vision integrated with AI can fix problems in our country. Although, reduce time for policeman and ambulance to get to danger point”",
		name: "Astana Hub",
		description: "Technopark",
		image: "astana-hub.png",
		rate: 5,
	},
	{
		text: "“Computer vision can identify and locate objects in images or videos, making it useful in various applications such as surveillance and self-driving cars.”",
		name: "Sergek",
		description: "Video registrator company",
		image: "sergek.png",
		rate: 4.5,
	},
	{
		text: "“Computer vision can extract valuable insights from visual data, enabling businesses to make informed decisions and optimize their operations.”",
		name: "Kolesa Group",
		description: "IT Company",
		image: "kolesaGroup.png",
		rate: 4.8,
	},
];

export default function Partners() {
	return (
		<section className="partners">
			<div className="partners__container">
				<div className="partners__info">
					<h3 className="partners__desc info">Social</h3>
					<h2 className="partners__title title">What do our partners say?</h2>
				</div>
				<div className="partners__content">
					<Swiper
						className="partners__slider"
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
						navigation={{ nextEl: ".partners__slider-next", prevEl: ".partners__slider-prev" }}
						modules={[Navigation, Autoplay]}
					>
						{partners.map((partner, key) => {
							let stars: JSX.Element[] = [];

							for (let i = 0; i < Math.ceil(partner.rate); i++) {
								stars.push(<img src="/assets/icons/star.svg" alt="star" key={i} />);
							}

							return (
								<SwiperSlide key={key}>
									<Slide
										name={partner.name}
										text={partner.text}
										description={partner.description}
										image={partner.image}
										rate={partner.rate}
										stars={stars}
									/>
								</SwiperSlide>
							);
						})}

						<img
							src="/assets/icons/arrow-left.svg"
							alt="prev"
							className="partners__slider-prev partners__pagination"
						/>
						<img
							src="/assets/icons/arrow-right.svg"
							alt="next"
							className="partners__slider-next partners__pagination"
						/>
					</Swiper>
				</div>
			</div>
		</section>
	);
}
