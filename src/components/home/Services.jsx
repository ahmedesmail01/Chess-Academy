import React from "react";
import { Container } from "react-bootstrap";
//import SchoolIcon from "@mui/icons-material/School";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faChess,
	faChessKnight,
	faChessRook,
	faChessPawn,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
	return (
		<div className="ca_services">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Services
			</motion.h1>
			<Container>
				<div className="holder">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="ca_services_card"
					>
						<FontAwesomeIcon
							className="card_icon"
							icon={faChess}
							size="4x"
							color="#0e8388"
						/>
						<p>
							Our online courses are designed for students of all skill levels,
							whether you're a complete beginner or an experienced player
							looking to take your game to the next level
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="ca_services_card"
					>
						<FontAwesomeIcon
							className="card_icon"
							size="4x"
							color="#0e8388"
							icon={faChessKnight}
						/>
						<p>
							We offer personalized coaching sessions with our expert
							instructor, who will work with you to identify your strengths and
							weaknesses and develop a customized training plan to help you
							achieve your goals
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="ca_services_card"
					>
						<FontAwesomeIcon
							className="card_icon"
							size="4x"
							color="#0e8388"
							icon={faChessRook}
						/>
						<p>
							Do you want to dive deeper into the game? we offer advanced
							courses on chess strategy and tactics, as well as special topics
							like opening theory and endgame strategy
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="ca_services_card"
					>
						<FontAwesomeIcon
							className="card_icon"
							size="4x"
							color="#0e8388"
							icon={faChessPawn}
						/>
						<p>
							Our interactive learning allows you to practice your skills in a
							variety of settings, including against computer programs that are
							designed to simulate real-world opponents
						</p>
					</motion.div>
				</div>
			</Container>
		</div>
	);
};

export default Services;
