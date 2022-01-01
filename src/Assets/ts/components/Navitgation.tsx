/*external deps*/
import { Link } from "react-router-dom";

/*internal deps*/
import Logo from "../../images/echoasoft-logo-187x43-1.png"
import routes from "../configs/routes";

export default function Navigation() {
	return (
		<header>
			<nav className="container navigation">
				<section className="BrandArea">
					<Link to="/">
						 <img
							src={Logo}
							alt="logo"
						/>
					</Link>
				</section>
				<section className="MenuArea">
					<ul>
						{routes().map((route) => (
							<li key={route.number}>
								<Link to={`${route.url}`} key={route.number}>
									{route.title}
								</Link>
							</li>
						))}
					</ul>
					<span className="humberger-icon">
						<div className="line"></div>
						<div className="line"></div>
						<div className="line"></div>
					</span>
				</section>
			</nav>
		</header>
	);
}
