import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Test.css";
import "swiper/css";
/* import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; */

import { EffectCoverflow, Pagination, Navigation } from "swiper";

//
const Test = () => {
	return (
		<div className="ca_test">
			<h1>Testimonials</h1>
			<Container>
				<Swiper
					spaceBetween={90}
					slidesPerView={1}
					onSlideChange={() => console.log("slide change")}
					onSwiper={(swiper) => console.log(swiper)}
					breakpoints={{
						// when window width is <= 768px (mobile screen)
						768: {
							slidesPerView: 3,
						},
					}}
				>
					<SwiperSlide>
						<div className="card">
							<div className="overlay">
								<div className="card_image">
									<img src="../../../src/assets/person01.jpg" alt="person 1" />
								</div>
							</div>
							<div className="info">
								<h2>John Dohn</h2>
								<p>
									Chess Academy is user-friendly and offers a wide range of
									resources. The instructors are highly professional
								</p>
								<div className="stars">
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star-half"></ion-icon>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card">
							<div className="overlay">
								<div className="card_image">
									<img src="../../../src/assets/person02.jpg" alt="person 1" />
								</div>
							</div>
							<div className="info">
								<h2>mary crose</h2>
								<p>
									Chess Academy has been a game-changer for me. The instructors
									are highly skilled and provide valuable feedback
								</p>
								<div className="stars">
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star-half"></ion-icon>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card">
							<div className="overlay">
								<div className="card_image">
									<img src="../../../src/assets/person03.jpg" alt="person 1" />
								</div>
							</div>
							<div className="info">
								<h2>Sara Ellon</h2>
								<p>
									Thanks to Chess Academy, I improved my skills. Highly
									recommended to anyone who wants to improve their game
								</p>
								<div className="stars">
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star"></ion-icon>
									<ion-icon className="ion-icon" name="star-half"></ion-icon>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="card">
							<div className="overlay">
								<div className="card_image">
									<img src="../../../src/assets/person04.jpg" alt="person 1" />
								</div>
							</div>
							<div className="info">
								<h2>Michael jack</h2>
								<p>
									Thanks to Chess Academy, I have become a much better chess
									player. Highly recommend to anyone who wants to learn
								</p>
								<div className="stars">
									<ion-icon name="star"></ion-icon>
									<ion-icon name="star"></ion-icon>
									<ion-icon name="star"></ion-icon>
									<ion-icon name="star"></ion-icon>
									<ion-icon name="star-half"></ion-icon>
								</div>
							</div>
						</div>
					</SwiperSlide>
					...
				</Swiper>
			</Container>
		</div>
	);
};

export default Test;

/* <Carousel>
					<Carousel.Item>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="../../../src/assets/person01.jpg"
								roundedCircle
								alt="Person 1"
								style={{ width: "100px", height: "100px", objectFit: "cover" }}
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="../../../src/assets/person02.jpg"
								roundedCircle
								alt="Person 1"
								style={{ width: "100px", height: "100px", objectFit: "cover" }}
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
					<Carousel.Item>
						<Card style={{ width: "18rem" }}>
							<Card.Img
								variant="top"
								src="../../../src/assets/person03.jpg"
								roundedCircle
								alt="Person 1"
								style={{ width: "100px", height: "100px", objectFit: "cover" }}
							/>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
				</Carousel> */

/* 				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 20,
						modifier: 2.5,
					}}
					pagination={{ el: ".swiper-pagination", clickable: true }}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
						clickable: true,
					}}
					modules={[EffectCoverflow, Pagination, Navigation]}
					className="swiper_container"
				>
					<SwiperSlide>
						<Card className="card-container">
							<Card.Img
								className="card-image"
								variant="top"
								src="../../../src/assets/person01.jpg"
								alt="Person 1"
							/>
							<Card.Body className="card-body">
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</SwiperSlide>
					<SwiperSlide
						style={{
							backgroundColor: "red",
							width: 500,
							height: 500,
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Card className="card-container">
							<Card.Img
								className="card-image"
								variant="top"
								src="../../../src/assets/person01.jpg"
								alt="Person 1"
							/>
							<Card.Body className="card-body">
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</SwiperSlide>
					<SwiperSlide>
						<Card className="card-container">
							<Card.Img
								className="card-image"
								variant="top"
								src="../../../src/assets/person01.jpg"
								alt="Person 1"
							/>
							<Card.Body className="card-body">
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</SwiperSlide>
					<SwiperSlide>
						<Card className="card-container">
							<Card.Img
								className="card-image"
								variant="top"
								src="../../../src/assets/person01.jpg"
								alt="Person 1"
							/>
							<Card.Body className="card-body">
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
						</Card>
					</SwiperSlide>
					<div className="slider-controler">
						<div className="swiper-button-prev slider-arrow">
							<ion-icon name="arrow-back-outline"></ion-icon>
						</div>
						<div className="swiper-button-next slider-arrow">
							<ion-icon name="arrow-forward-outline"></ion-icon>
						</div>
						<div className="swiper-pagination"></div>
					</div>
				</Swiper> */
