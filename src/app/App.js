import React from "react"

import Navbar from "./Navbar"

import { Line } from 'react-chartjs-2';



class App extends React.Component {
	constructor() {
		super()
	}
	render() {
		return <>
			<Navbar></Navbar>
			<div className="slider">
				<ul>
					<li>
						<img src="/img/libro.jpg" alt=""></img>
					</li>

					<li>
						<img src="/img/corrupcion1.jpg" alt=""></img>
					</li>

					<li>
						<img src="/img/hackaton.png" alt=""></img>
					</li>

				</ul>
			</div>

			<h1> Preguntas frecuentes</h1>
			<div className="accordion" id="accordionExample">
				<div className="accordion-item">
					<h2 className="accordion-header" id="headingOne">
						<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
							¿Qué es la corrupción?
						</button>
					</h2>
					<div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Es un fenómeno social, en el cual existen condiciones sistemáticas de apropiación ilegítima del espacio
								público para propósitos particulares.
								Es una práctica consistente en la utilización de las funciones y medios de las organizaciones en
								provecho, económico o de otra índole, de sus gestores.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingTwo">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
							¿Qué es la denuncia administrativa?
						</button>
					</h2>
					<div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Es un acto procesal por el que cualquier persona, por escrito o medio electrónico, ante la autoridad
								administrativa correspondiente, relata hechos posiblemente constitutivos de faltas administrativas
								cometidas por servidores públicos y, en su caso, por particulares.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingThree">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
							¿Qué es la denuncia penal?
						</button>
					</h2>
					<div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Es un acto procesal por el que cualquier persona, verbalmente o por escrito, ante el Ministerio Público
								relata hechos posiblemente constitutivos de delito.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingFour">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
							¿Quién puede denunciar?
						</button>
					</h2>
					<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Cualquier persona que tenga conocimiento de una posible falta administrativa o de un delito por
								hecho de corrupción cometido por algún servidor público o por una persona física o jurídica.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingFive">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
							¿Cómo se presenta la denuncia?
						</button>
					</h2>
					<div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Las denuncias se pueden presentar por escrito o de manera electrónica, si es que la entidad pública
								cuenta con un sistema. Pueden ser ANÓNIMAS. En su caso, la autoridad mantendrá con carácter de
								confidencial la identidad del denunciante. Deberán de contener datos o indicios que permitan advertir
								la presunta responsabilidad.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingSix">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
							¿Qué debe contener la denuncia?
						</button>
					</h2>
					<div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>○ En caso de no ser anónima, los datos de identificación y ubicación del denunciante.<br />
								○ Nombre y puesto de la servidora o servidor público denunciado.<br />
								○ En caso de no conocer el nombre y el puesto, hacer una descripción física de la servidora o
								servidor público denunciado, así como de las funciones que realiza, y del lugar o área de
								trabajo.<br />
								○ Tratándose de denuncias en contra de personas físicas o jurídicas, deberá señalarse el nombre
								de la persona física o de la persona jurídica, y de ser posible de las personas que las
								representan.<br />
								○ Si se desconoce el nombre de las personas físicas o jurídicas, se deberá
								hacer una descripción física de las personas, así como de cualquier dato que permita la
								identificación de las mismas.<br />
								○ Una narración de los hechos que dieron origen a la presunta falta administrativa o delito.<br />
								○ En su caso, las pruebas que se tengan respecto de la falta o delito denunciado.<br />
								○ En su caso, la autoridad a la que va dirigida. (Órgano Interno de Control o Fiscalía.<br />
							</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingSeven">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
							¿Dónde se presentan las denuncias?
						</button>
					</h2>
					<div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Las denuncias por faltas administrativas se presentan ante los Órganos Internos de Control de la
								entidad pública en la que labore el servidor público infractor, o en su caso, donde la persona física o
								jurídica realice la comisión de las faltas señaladas.
								Las denuncias por delitos de hechos de corrupción se presentan ante la Fiscalía Especializada en
								Combate a la Corrupción.
								*La solución que propongan permitirá que las denuncias se presenten de manera remota a través de
								medios electrónico.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingEight">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
							¿Quiénes son servidoras y servidores públicos?
						</button>
					</h2>
					<div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Se consideran Servidores Públicos a toda persona que desempeña un cargo o comisión de cualquier
								naturaleza en los poderes Legislativo, Ejecutivo y Judicial, los Ayuntamientos y sus dependencias, los
								organismos constitucionales autónomos, así como en los organismos descentralizados, fideicomisos
								públicos y empresas de participación estatal y municipal mayoritaria, y a los representantes de
								elección popular, y los titulares de los órganos internos de control.
								Los servidores públicos además de incurrir en faltas administrativas, tienen responsabilidad política,
								penal y civil.</strong>
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header" id="headingNine">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
							¿Qué es una falta administrativa?
						</button>
					</h2>
					<div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>Son faltas administrativas, los actos u omisiones realizados por servidores públicos en el ejercicio de
								sus funciones que contravengan con las disposiciones legales. Las faltas administrativas se clasifican en
								no graves y graves.</strong>
						</div>
					</div>
				</div>
			</div>
		</>
	}
}

export default App