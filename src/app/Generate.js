import React from "react"
import Navbar from "./Navbar"


class Generate extends React.Component {
	constructor() {
		super()
	}
	render() {
		return <>
			<Navbar></Navbar>

			<form action="/api/form" method="POST">
			<div className="card2">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Datos del Denunciante</h5>
						<div className="formulario1">
								<div className="form-group">
									<br></br>
									<label htmlFor="nombre_denunciante">Ingresa el nombre del denunciante  </label> <br></br>
									<input type="text" placeholder="Nombre" name="nombre_denunciante" id="nombre_denunciante" required/> <br></br>
									<small id="emailHelp" className="form-text text-muted">No compartiremos tus datos con nadie más.</small>
								</div>

								<div className="form-group">
									<br></br>
									<label htmlFor="sexo_denunciante">Ingresa el sexo del denunciante  </label> <br></br>
									<div></div><label><input type="radio" id="sexo_denunciante" value="Femenino" name="sexo_denunciante" required/> Femenino</label><br></br>
									<div></div><label><input type="radio" id="sexo_denunciante" value="Masculino" name="sexo_denunciante" required/> Masculino</label><br></br>
									<small id="emailHelp" className="form-text text-muted">No compartiremos tus datos con nadie más.</small>
								</div>

								<div className="form-group">
									<br></br>
									<label htmlFor="edad">Ingresa la edad del denunciante</label><br></br>
									<input type="text" placeholder="Edad" name="edad_denunciante" id="edad_denunciante" required/> <br></br>
									<small id="emailHelp" className="form-text text-muted">No compartiremos tus datos con nadie más.</small>
								</div>

								<div className="form-group">
									<br></br>
									<label htmlFor="ocupacion_denunciante">Ingresa la ocupación del denunciante  </label><br></br>
									<input type="text" placeholder="Ocupación" name="ocupacion_denunciante" id="ocupacion_denunciante" /> <br></br>
									<small id="emailHelp" className="form-text text-muted">No compartiremos tus datos con nadie más.</small>
								</div>

								<div className="form-group">
									<br></br>
									<label htmlFor="anonimo">¿Deseas que sea un denuncia anónima?  </label> <br></br>
									<div></div><label><input type="checkbox" id="aninimo" value="1" name="anonimo" /> Anónimo</label><br></br>
								</div>
						</div>
					</div>
				</div>
			</div>



			<div className="card2">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Datos del Suceso</h5>
						<div className="formulario1">
							<div className="form-group">
								<br></br>
								<label htmlFor="nombre_denunciante">Ingresa tu correo electrónico </label> <br></br>
								<input type="email" placeholder="Correo Electrónico" name="correo" id="correo" /> <br></br>
								<small id="emailHelp" className="form-text text-muted">Será el medio por el que demos seguimiento a tu denuncia.</small>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="edad">Estado donde ocurrió el suceso</label><br></br>
								<input type="text" placeholder="Estado" name="estado" id="estado" required/> <br></br>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="edad">Municipio donde ocurrió el suceso</label><br></br>
								<input type="text" placeholder="Municipio" name="municipio" id="municipio" required/> <br></br>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="edad">Ingresa la dirección del suceso</label><br></br>
								<input type="text" placeholder="Domicilio" name="domicilio_suceso" id="domicilio_suceso" required/> <br></br>
								<small id="emailHelp" className="form-text text-muted">Calle y Número</small>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="ocupacion_denunciante">Ingresa la fecha del suceso  </label><br></br>
								<input type="date" name="fecha_suceso" id="fecha_suceso" required/> <br></br>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="ocupacion_denunciante">Ingresa la fecha actual  </label><br></br>
								<input type="date" name="fecha_actual" id="fecha_actual" /> <br></br>
							</div>

							<div className="form-group">
								<br></br>
								<label htmlFor="ocupacion_denunciante">Describe el suceso ocurrido </label><br></br>
								<textarea placeholder="Suceso" name="suceso_ocurrido" id="suceso_ocurrido" required/> <br></br>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="card2">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Datos del Denunciado</h5>
						<div className="formulario1">
							<div className="form-group">
								<br></br>
								<label htmlFor="nombre_denunciante">Ingresa el nombre del denunciado  </label> <br></br>
								<input type="text" placeholder="Nombre" name="nombre_denunciado" id="nombre_denunciado" required/> <br></br>
							</div>
							<div className="form-group">
								<br></br>
								<label htmlFor="ocupacion_denunciante">Ingresa el cargo del denunciado  </label><br></br>
								<input type="text" placeholder="Ocupación" name="ocupacion_denunciado" id="ocupacion_denunciado" required/> <br></br>
							</div>

					</div>
				</div>
			</div>
		</div>
		<input className="btn btn-primary" type="submit" placeholder="Denunciar" value="Denunciar"></input>
		</form>
		</>
	}
}

export default Generate