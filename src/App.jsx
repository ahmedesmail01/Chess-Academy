//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
//import ThemeProvider from "react-bootstrap/ThemeProvider";
import NavbarCa from "./components/home/NavbarCa";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Gallery from "./components/home/Gallery";
import Test from "./components/home/Test";
import Footer from "./components/Footer";
import Pricing from "./components/pricing/Pricing";
import Faq from "./components/FAQ/Faq";
import Contact from "./components/contact/Contact";
import Achiev from "./components/achiev/Achiev";
function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<NavbarCa />
								<Hero />
								<Services />
								<Gallery />
								<Test />
								<Footer />
							</>
						}
					/>
					<Route
						path="/pricing"
						element={
							<>
								<NavbarCa />
								<Pricing />
								<Footer />
							</>
						}
					/>
					<Route
						path="/faq"
						element={
							<>
								<NavbarCa />
								<Faq />
								<Footer />
							</>
						}
					/>
					<Route
						path="/contact"
						element={
							<>
								<NavbarCa />
								<Contact />
								<Footer />
							</>
						}
					/>
					<Route
						path="/achievements"
						element={
							<>
								<NavbarCa />
								<Achiev />
								<Footer />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
