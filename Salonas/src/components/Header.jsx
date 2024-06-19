import { useContext, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import './css/Header.css'
import { AuthContext } from "../utils/AuthContext"
import { Link } from "react-router-dom";

function Navbar() {

	const { user: authUser, logoutUser } = useContext(AuthContext);

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<>
			<header>
				<h5 className=""> {authUser ? `Logged in as ${authUser.username}` : ''}</h5>
				<nav ref={navRef}>
					{!authUser ? (
						<>
							<div className="logo"><Link to="/"><p className="logo-collor">Būk gražus kaip praktikos egzaminas</p></Link></div>

							<ul>
								<li><Link to="/">Pagrindinis</Link></li>
								<li><Link to="/about">Apie</Link></li>
								<li className="link"><Link to="">Susisiekime</Link></li>
								<li><Link to="/login">Prisijungti</Link></li>
								<li className="register-btn"><Link to="/signup">Registracija</Link></li>
							</ul>
						</>
					) : (
						<>

							<div className="logo"><Link to="/"><p className="logo-collor">Būk gražus kaip praktikos egzaminas</p></Link></div>
							<ul>
								<li className="link"><Link to="/explore">Paieška</Link></li>
								<li className="link"><Link to="/">Pagrindinis</Link></li>
								<li className="link"><Link to="/about">Apie mus</Link></li>
								<li className="link"><Link to="/contacts">Susisiekime</Link></li>
								<li className="link"><Link to="/dashboard">Vizitai</Link></li>
								<li className="link"><Link to="" onClick={logoutUser}>Atsijungti</Link></li>
							</ul>
						</>
					)}
				</nav>
			</header>
		</>
	);
}

export default Navbar;
