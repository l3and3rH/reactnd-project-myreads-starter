import React from "react";
import { BrowserRouter } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Home from "./Home.js";
import SearchPage from "./Searchpage";
import { Switch, Route } from "react-router-dom";

class BooksApp extends React.Component {
	render() {
		return (
			<div className='app'>
				<BrowserRouter>
					<Switch>
						<Route path='/search'>
							<SearchPage />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default BooksApp;
