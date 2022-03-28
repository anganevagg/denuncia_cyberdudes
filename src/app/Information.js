import React from "react"
import Navbar from "./Navbar"


class Information extends React.Component {
	constructor() {
		super()
	}
	render() {
		return <>
			<Navbar></Navbar>
			<div className="card3">
				<div className="card-body">
					<h5 className="card-title">Corrupción en México</h5>
					<p className="card-text">El "Índice de Percepción de la Corrupción", un índice de corrupción percibida en el sector público, se situó en 69 puntos en 2021 en México.
						La escala oscila entre 0 y 100, con más corrupción cuanto mayor sea el valor. México ocupa el puesto 124. Por lo tanto,
						el resultado es ligeramente por debajo de la media en comparación con otros países."</p>
					<a href="https://www.datosmundial.com/america/mexico/corrupcion.php" className="btn btn-primary">Ver indices de corrupción en México</a>
				</div>
			</div>

			<div className="card3">
				<div className="card-body">
					<h5 className="card-title">Desarrollo de la corrupción en México 2003 - 2021</h5>
					<img className="img" src="/img/Mexico.png" alt=""></img>
				</div>
			</div>

			<div className="card4">
				<div className="card-body">
					<h5 className="card-title">La evaluación que aquí se muestra es basada en los datos de 2021 y enumera 117 países.
						Es sorprendente que la corrupción sea muy limitada en Europa del Norte, América del Norte y Australia. México está muy lejos en el puesto 62. Con el 28° puesto,
						España ya es uno de los países con menor corrupción. El final de la tabla es Sudán del Sur.</h5>
					<img className="img" src="/img/Mundo.png" alt=""></img>
				</div>
			</div>

		</>
	}
}

export default Information