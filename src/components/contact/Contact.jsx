import React from "react";
import { Button, Container } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<h1>You can contact us Here</h1>
			<Container className="contact_container">
				<div className="discord">
					<div className="icon">
						<ion-icon name="logo-discord"></ion-icon>
					</div>
					<p>Discord</p>
					<a
						href="https://discord.gg/ZS86EXrR"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="primary">Join Server</Button>
					</a>
				</div>
				<div className="gmail">
					<div className="icon">
						<ion-icon name="mail"></ion-icon>
					</div>
					<p>Gmail</p>
					<a
						href="mailto:Inox8972@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="primary">Contact</Button>
					</a>
				</div>
			</Container>
		</div>
	);
};

export default Contact;
