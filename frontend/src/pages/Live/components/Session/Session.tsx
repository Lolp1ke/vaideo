import React, {useState, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/scss";
import "swiper/css/navigation";

import Slider from "../Slider/Slider";

import "./styles/session.scss";

interface partnersProps {
	image: string;
}


const partners: partnersProps[] = [
	{
		image: "astana-hub.png",
	},
	{
		image: "sergek.png",
	},
	{
		image: "kolesaGroup.png",
	},
];


// const collision = [
//     {
//         id:1,
// 		image: "/assets/partners/astana-hub.png",
// 	},
// 	{
//         id:2,
// 		image: "/assets/partners/sergek.png",
// 	},
// 	{
//         id:3,
// 		image: "/assets/partners/kolesaGroup.png",
// 	},
//     {
//         id:4,
// 		image: "astana-hub.png",
// 	},
// 	{
//         id:5,
// 		image: "sergek.png",
// 	},
// 	{
//         id:6,
// 		image: "kolesaGroup.png",
// 	},
// ]



export default function Session() {
        const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
          }, 1000);
      
          // Clear interval on component unmount
          return () => clearInterval(intervalId);
        }, []);
      
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;


	return (
		<section className="session" id={"session"}>
			<div className="session__container">
				<div className="session__data">
                    <div className="session__data__left">
                        <img src="/assets/icons/live.svg" alt="live"/>
                        <span className="session__text">Live session</span>
                    </div>

                    <div className="session__data__right">
                        <span className="session__text">Time left: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</span>
                    </div>
                </div>

                <div className="session_live">
                    <img src="/assets/images/accident.svg" alt="accident" />
                </div>


                <div className="session__content">
					<Swiper
						className="session__slider"
						slidesPerView={1}
						loop={true}
						autoplay={{ delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false }}
						navigation={{ nextEl: ".session__slider-next", prevEl: ".session__slider-prev" }}
						modules={[Navigation, Autoplay]}
					>
						{partners.map((e, key) => {
							return (
								<SwiperSlide key={key}>
									<Slider
                                    image={e.image}>
                                    </Slider>
								</SwiperSlide>
							);
						})}

                        <img
							src="/assets/icons/arrow-left.svg"
							alt="prev"
							className="session__slider-prev session__pagination"
						/>
						<img
							src="/assets/icons/arrow-right.svg"
							alt="next"
							className="session__slider-next session__pagination"
						/>
                </Swiper>
			</div>
        </div>
		</section>
	);
    }

