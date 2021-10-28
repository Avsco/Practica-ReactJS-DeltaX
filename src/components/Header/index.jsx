import { Link } from "react-router-dom";
import "./styles.css";

const ROUTES = [
	{
		route: "/",
		name: "Home",
	},
	{
		route: "/search",
		name: "Search",
	},
];

function Header() {
	return (
		<header className="header">
			<nav>
				<ul className="header__list">
					{ROUTES.map((r) => (
						<li key={r.name}>
							<Link to={r.route}>{r.name}</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
