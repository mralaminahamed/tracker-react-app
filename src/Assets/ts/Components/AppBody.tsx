/* external deps */
import { Routes, Route, Link } from "react-router-dom";

/* internal deps */
import Home from "../pages/Home";

function About() {
	return <h1>About</h1>;
}

function Products() {
	return <h1>Products</h1>;
}

// https://reactrouter.com/docs/en/v6/getting-started/tutorial

export default function Container() {
	return (
		<main>
			<section className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>
									Content not found <br />
									Please try again or visit
									<Link to="/">Home</Link>
								</p>
							</main>
						}
					/>
				</Routes>
			</section>
		</main>
	);
}
