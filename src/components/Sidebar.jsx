import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
//import Collapse from "react-bootstrap/Collapse";

const Sidebar = () => {
	const [show, setShow] = useState(false);
	//const [open, setOpen] = useState(false);

	const handleClose = () => setShow(false);

	/* const handleDropdownClick = () => {
		setOpen(!open);
	}; */

	return (
		<>
			{[false].map((expand) => (
				<Navbar
					key={expand}
					expand={expand}
					className="ca_navbar fixed-top"
					variant="dark"
				>
					<Container fluid>
						<Navbar.Brand href="#">Chess Academy</Navbar.Brand>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							onClick={() => setShow(true)}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="start"
							show={show}
							onHide={handleClose}
						>
							<Offcanvas.Header
								style={{ color: "#cbe4de", backgroundColor: "#2e4f4f" }}
								closeButton
							>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									Chess Academy
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body
								style={{ color: "#cbe4de", backgroundColor: "#2e4f4f" }}
							>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<NavDropdown
										title="Home Page"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
									>
										<Link className="ca_nav" to="/" onClick={handleClose}>
											<NavDropdown.Item className="ca_nav" href="#action7">
												Home
											</NavDropdown.Item>
										</Link>
										<Link
											className="ca_nav"
											to="/pricing"
											onClick={handleClose}
										>
											<NavDropdown.Item className="ca_nav" href="#action7">
												Pricing
											</NavDropdown.Item>
										</Link>
										<Link className="ca_nav" to="/faq" onClick={handleClose}>
											<NavDropdown.Item className="ca_nav" href="#action7">
												FAQ
											</NavDropdown.Item>
										</Link>
										<Link
											className="ca_nav"
											to="/contact"
											onClick={handleClose}
										>
											<NavDropdown.Item className="ca_nav" href="#action7">
												Contact
											</NavDropdown.Item>
										</Link>
										<Link
											className="ca_nav"
											to="/achievements"
											onClick={handleClose}
										>
											<NavDropdown.Item className="ca_nav" href="#action7">
												Achievements
											</NavDropdown.Item>
										</Link>
									</NavDropdown>
									<NavDropdown
										title="Introduction"
										id={`offcanvasNavbarDropdown-expand-${expand}`}
									>
										<NavDropdown.Item href="https://www.openingtree.com">
											Start a Game
										</NavDropdown.Item>
										<NavDropdown.Item href="#action4">
											Parctice
										</NavDropdown.Item>
									</NavDropdown>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default Sidebar;
