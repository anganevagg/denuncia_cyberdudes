const app = document.getElementById('app')

class Navbar extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <>
			<div className = "navi">
				<div className = "menu">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a className="navbar-brand" href="#">Denuncia Ciudadana</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item active">
									<ReactRouterDOM.Link to="/">Inicio</ReactRouterDOM.Link>
								</li>
								<li className="nav-item">
									<ReactRouterDOM.Link to="/generate">Generar</ReactRouterDOM.Link>
								</li>
								<li className="nav-item">
									<ReactRouterDOM.Link to="/generates">Generadas</ReactRouterDOM.Link>
								</li>
								<li className="nav-item">
									<ReactRouterDOM.Link to="/information">Información</ReactRouterDOM.Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>
		</>
	}
}

class App extends React.Component{
	constructor(){
		super()
		this.canvas = React.createRef()
	}
	render(){
		return <>
			<Navbar></Navbar>
			<div class="container">
				<div class="row">
					<h1>Antes de empezar, recuerda que SI puedes y que NO puedes denunciar</h1>
				<div class="card" style="width: 18rem;">
					<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="card-link">Card link</a>
					<a href="#" class="card-link">Another link</a>
					</div>
				</div>
				<div class="card" style="width: 18rem;">
					<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" class="card-link">Card link</a>
					<a href="#" class="card-link">Another link</a>
					</div>
				</div>

				</div>
			</div>
		</>
	}
}

class Generate extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <>
			<Navbar></Navbar>
		</>
	}
}

class Generates extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <>
			<Navbar></Navbar>
			<p>Generadas</p>
		</>
	}
}

class Information extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <>
			<Navbar></Navbar>
			

		</>
	}
}

class Router extends React.Component{
	constructor(){
		super()
	}
	render(){
		return <>
			<ReactRouterDOM.HashRouter>
	          <ReactRouterDOM.Route path="/" exact component={App} />
	          <ReactRouterDOM.Route path="/generate" component={Generate} />
	          <ReactRouterDOM.Route path="/generates" component={Generates} />
	          <ReactRouterDOM.Route path="/information" component={Information} />
	        </ReactRouterDOM.HashRouter>
		</>
	}
}

ReactDOM.render(<Router/>, app)