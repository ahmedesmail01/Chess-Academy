import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavbarCa = () => {
	const navbarRef = useRef();

	const handleLinkClick = () => {
		navbarRef.current.querySelector(".navbar-toggler").click();
	};

	return (
		<Navbar
			ref={navbarRef}
			className="ca_navbar fixed-top"
			expand="lg"
			variant="dark"
		>
			<Container>
				<Navbar.Brand href="#" className="ca_logo">
					Chess Academy
				</Navbar.Brand>
				<Navbar.Toggle
					className="navbar-toggler"
					data-bs-toggle="collapse"
					data-bs-target="#navbarScroll"
					aria-controls="navbarScroll"
					aria-expanded="false"
				/>
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2 my-lg-0"
						style={{ maxHeight: "200px" }}
						navbarScroll
					>
						<Nav.Link onClick={handleLinkClick}>
							<Link className="ca_nav" to="/">
								Home
							</Link>
						</Nav.Link>
						<Nav.Link onClick={handleLinkClick}>
							<Link className="ca_nav" to="/pricing">
								Pricing
							</Link>
						</Nav.Link>
						<Nav.Link onClick={handleLinkClick}>
							<Link className="ca_nav" to="/faq">
								FAQ
							</Link>
						</Nav.Link>
						<Nav.Link onClick={handleLinkClick}>
							<Link className="ca_nav" to="/contact">
								Contact
							</Link>
						</Nav.Link>
						<Nav.Link onClick={handleLinkClick}>
							<Link className="ca_nav" to="/achievements">
								Achievements
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarCa;
