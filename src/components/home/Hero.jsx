import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div className="ca_hero">
				<Container className="ca_hero_container">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 2 }}
					>
						Welcome To Chess Academy
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 2.2 }}
					>
						The Path To Mastering Chess
					</motion.p>
				</Container>
			</div>
		</>
	);
};

export default Hero;

/* 					<p className="ca_p_hero_mobile">
						where you can learn the game of kings and queens from the comfort of
						your own home.
					</p>
					<p className="ca_p_hero_mobile">
						Our expert instructor will guide you through everything from the
						basics of how the pieces move to advanced strategies and tactics.
					</p>
					<p className="ca_p_hero_mobile">
						Our online course are designed for students of all skill levels,
						whether you're a complete beginner or an experienced player looking
						to take your game to the next level
					</p>
					<p className="ca_p_hero_mobile">
						why wait? contact us today and start your journey to becoming a
						chess master.
					</p> */
