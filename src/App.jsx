import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import "./App.css";

const Home = lazy(() => import("./views/Home"));
const Search = lazy(() => import("./views/Search"));

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/search">
						<Suspense fallback={<Spinner />}>
							<Search />
						</Suspense>
					</Route>
					<Suspense fallback={<Spinner />}>
						<Home />
					</Suspense>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
