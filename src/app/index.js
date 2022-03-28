import App from "./App"
import Generate from "./Generate"
import Generates from "./Generates"
import Information from "./Information"
import React from 'react'
import ReactDOM from 'react-dom'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom"

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/" element={<App />} exact />
			<Route path="/generate" element={<Generate />} />
			<Route path="/generates" element={<Generates />} />
			<Route path="/information" element={<Information />} />
		</Routes>
	</Router>
	, document.getElementById('app'))