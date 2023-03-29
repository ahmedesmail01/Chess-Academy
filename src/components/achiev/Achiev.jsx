import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./achiev.css";

import s01 from "../../assets/s01.jpg";
import s02 from "../../assets/s02.jpg";
import s03 from "../../assets/s03.jpg";
import s04 from "../../assets/s04.jpg";
import s05 from "../../assets/s05.jpg";
import s06 from "../../assets/s06.jpg";
import s07 from "../../assets/s07.jpg";
import s08 from "../../assets/s08.jpg";
import s09 from "../../assets/s09.jpg";
import s10 from "../../assets/s10.jpg";
import s11 from "../../assets/s11.jpg";

import back from "../../assets/grad-back.jpg";

const Achiev = () => {
	const data = [
		{
			img: s01,
			name: "Allison Griffith",
			para: "Allison had some experience in chess but wanted to take it to the next level. Chess Academy helped her become a strong player who won many tournaments in her university",
		},
		{
			img: s02,
			name: "Dries Augustyns",
			para: "Dries was a casual player until he joined Chess Academy. He practiced regularly and became the champion of his school's chess team.",
		},
		{
			img: s03,
			name: "Irene Strong",
			para: "Irene struggled with chess until she found Chess Academy. She practiced regularly and became the best player in her school.",
		},
		{
			img: s04,
			name: "Jhom Kann",
			para: "Jhom was a casual player until he joined Chess Academy. He practiced hard and became the champion of his school chess club.",
		},
		{
			img: s05,
			name: "Juan Encalada",
			para: "Juan joined Chess Academy to improve his game. He became a skilled player and won many matches in his school chess club.",
		},
		{
			img: s06,
			name: "John Hilario",
			para: "John was a beginner when he joined Chess Academy. He practiced regularly and won several tournaments in his school.",
		},
		{
			img: s07,
			name: "Midas Hofster",
			para: "Midas always had an interest in chess but never pursued it until he joined Chess Academy. He won several tournaments in his university.",
		},
		{
			img: s08,
			name: "Mohammed Rizwan",
			para: "Mohammed had some experience in chess but wanted to improve. Chess Academy helped him become a formidable player who won many matches.",
		},
		{
			img: s09,
			name: "Natasha Kasim",
			para: "Natasha struggled with chess until she found Chess Academy. She improved rapidly and won the university championship.",
		},
		{
			img: s10,
			name: "Ryan Hoffman",
			para: "Ryan joined Chess Academy to improve his chess game. He became one of the best players in his school and won many matches.",
		},
		{
			img: s11,
			name: "Setyaki Irham",
			para: "Setyaki had a passion for chess but lacked proper coaching. Chess Academy helped him improve and he won many tournaments in his university.",
		},
	];

	return (
		<div className="achiev">
			<h1 className="heading">Achievements</h1>
			<div className="back">
				<img src={back} alt="back" />
			</div>
			<Container className="achiev_container">
				{data.map((e, index) => {
					return (
						<div className="a_card" key={index}>
							<div className="img_holder">
								<img className="card_img" src={e.img} alt="image" />
							</div>
							<div className="info">
								<h3>{e.name}</h3>
								<p>{e.para}</p>
							</div>
						</div>
					);
				})}
			</Container>
		</div>
	);
};

export default Achiev;

/* <Card style={{ width: "18rem" }}>
<div className="img_holder">
	<Card.Img
		variant="top"
		src={`../../../src/assets/s${e.img}.jpg`}
		className="card_img"
	/>
</div>
<Card.Body className="achiev_card">
	<Card.Title>{e.name}</Card.Title>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
		a voluptas obcaecati aspernatur totam aliquam quasi enim saepe
		dolorem ex.
	</p>
</Card.Body>
</Card> */
