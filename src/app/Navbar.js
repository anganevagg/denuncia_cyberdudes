import React from "react"
import ReactDOM from "react-dom"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
	constructor() {
		super()
	}
	render() {
		return <>
			<div className="navi">
				<div className="menu">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#"><strong>Denuncia Ciudadana</strong></a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<Link to="/"><strong>Inicio</strong></Link>
								</li>
								<li className="nav-item">
									<Link to="/generate"><strong>Generar</strong></Link>
								</li>
								<li className="nav-item">
									<Link to="/generates"><strong>Generadas</strong></Link>
								</li>
								<li className="nav-item">
									<Link to="/information"><strong>Información</strong></Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	}
}

export default Navbar