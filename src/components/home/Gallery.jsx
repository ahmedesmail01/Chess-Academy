import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="ca_gallery">
			<Container>
				<div className="ca_gallery_container">
					<Carousel activeIndex={index} onSelect={handleSelect}>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="../../../src/assets/chess01.jpg"
								alt="First slide"
							/>
							<Carousel.Caption
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: -20,
									paddingBottom: 50,
									backgroundColor: "#0e84885e",
								}}
							>
								<h3 className="ca_gallery_h3">Defeat Your Enemy</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="../../../src/assets/chess02.jpg"
								alt="Second slide"
							/>

							<Carousel.Caption
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: -20,
									paddingBottom: 50,
									backgroundColor: "#0e84885e",
								}}
							>
								<h3 className="ca_gallery_h3">Choose Your Target</h3>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								src="../../../src/assets/chess03.jpg"
								alt="Third slide"
							/>

							<Carousel.Caption
								style={{
									position: "absolute",
									left: 0,
									right: 0,
									bottom: -20,
									paddingBottom: 50,
									backgroundColor: "#0e84885e",
								}}
							>
								<h3 className="ca_gallery_h3">Get Your Lesson</h3>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
			</Container>
		</div>
	);
};

export default Gallery;
