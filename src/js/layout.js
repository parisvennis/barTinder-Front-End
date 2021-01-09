import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { StepBase } from "./component/stepBase.js";
import { StepMods } from "./component/stepModifier.js";

// import { StepGarnish } from "../component/StepGarnish.js";
import { Questions } from "./views/questions";

import { Home } from "./views/home";
import RandomCocktails from "./views/randomCocktails";
import { Signup } from "./views/signup";
import injectContext from "./store/appContext";
import { Login } from "./component/login";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import SingleCocktail from "./views/singleCocktail";
import Results from "./views/results";
import Favorites from "./views/favorites";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/random-cocktails" component={RandomCocktails} />
						<Route exact path="/single-cocktail" component={SingleCocktail} />
						<Route exact path="/questions" component={Questions} />
						<Route exact path="/questions/:currentstep" component={Questions} />
						<Route exact path="/stepBase" component={StepBase} />
						<Route exact path="/stepModifier" component={StepMods} />
						<Route exact path="/results" component={Results} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/" component={Home} />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
