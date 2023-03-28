import React from "react";
import { Container } from "react-bootstrap";
import "./faq.css";

const Faq = () => {
	return (
		<div className="faq">
			<h1>Frequently Asked Questions (FAQ)</h1>
			<Container>
				<div className="faq_holder">
					<div className="quest_holder">
						<h2 className="quest">What is Chess Academy?</h2>
						<p className="answer">
							Anyone who is interested in learning chess can join Chess Academy.
							We offer lessons for all ages and skill levels, from beginners to
							advanced players.
						</p>
					</div>
					<div className="quest_holder">
						<h2 className="quest">
							What kind of lessons are available on Chess Academy?
						</h2>
						<p className="answer">
							We offer a wide range of lessons on Chess Academy, including basic
							chess rules, strategies, tactics, openings, endgames, and more.
							Our lessons are designed to be interactive and engaging, with
							quizzes and practice games to help reinforce the concepts learned.
						</p>
					</div>
					<div className="quest_holder">
						<h2 className="quest">How much does Chess Academy cost?</h2>
						<p className="answer">
							We offer two plans, Yo can choose whatever You want and if You did
							not find what you want contact us and Get your special Offer:
							<br />
							weekly plan : from 10$ - 20$ ,<br />
							monthly plan : from 30$ - 50$ ,<br />
							You will Get your Lessons Daily , Every session will be from 1
							hour to 2 hours according to Your plan.
						</p>
					</div>
					<div className="quest_holder">
						<h2 className="quest">
							What equipment do I need to participate in Chess Academy?
						</h2>
						<p className="answer">
							All you need to participate in Chess Academy is a computer or
							mobile device with an internet connection. We recommend using a
							computer for the best experience, but our platform is also
							mobile-friendly for those who prefer to use their phone or tablet.
						</p>
					</div>
					<div className="quest_holder">
						<h2 className="quest">
							How do I get help if I have a problem or question?
						</h2>
						<p className="answer">
							If you have any problems or questions about Chess Academy, you can
							contact our customer support team through the website or email.
							We're always happy to help and answer any questions you may have.
						</p>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Faq;
