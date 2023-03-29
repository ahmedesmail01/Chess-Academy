import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import "./pricing.css";

import paypal from "../../assets/paypal.png";
import stripe from "../../assets/stripe.png";

const Pricing = () => {
	return (
		<div className="pricing">
			<h1 className="heading">Pricing Plans</h1>
			<Container className="picing_container">
				<Row className="justify-content-center">
					<Col md={6} lg={4} className="mb-4">
						<Card className="pricing_card p-4">
							<Card.Body>
								<Card.Title className="fs-3 mb-2 text-center">
									Weekly Plan
								</Card.Title>
								<Card.Text className="text-center">
									<h1 className="font-weight-bold fs-3 mb-2">10$ - 20$</h1>
									<p className=" mb-2">
										Get access to our weekly chess lessons and practice games
										for just $10 to $20 per week.
									</p>
									<p className=" mb-2">
										Every Session is About 60 min to 2 Hours Daily
									</p>
									<h3 className="font-weight-bold fs-4">Payment Methods</h3>
									<div className="payment">
										<div className="paypal">
											<img src={paypal} alt="" srcset="" />
										</div>
										<div className="stripe">
											<img src={stripe} alt="" srcset="" />
										</div>
									</div>
									<Link to="/contact">
										<Button variant="primary">Contact Now</Button>
									</Link>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md={6} lg={4} className="mb-4">
						<Card className="pricing_dark p-4">
							<Card.Body>
								<Card.Title className="fs-3 mb-1 text-center">
									Monthly Plan
								</Card.Title>
								<Card.Text className="text-center">
									<h1 className="font-weight-bold fs-3 mb-1">30$ - 50$</h1>
									<p className="mb-2">
										Get access to our monthly chess lessons and practice games
										for just $30 to $50 per month.
									</p>
									<p className=" mb-2">
										Every Session is About 60 min to 2 Hours Daily
									</p>
									<h3 className="font-weight-bold fs-4">Payment Methods</h3>
									<div className="payment">
										<div className="paypal">
											<img src={paypal} alt="" srcset="" />
										</div>
										<div className="stripe">
											<img src={stripe} alt="" srcset="" />
										</div>
									</div>
									<Link to="/contact">
										<Button variant="primary">Contact Now</Button>
									</Link>
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Pricing;
