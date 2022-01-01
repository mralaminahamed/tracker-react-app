/* external deps */
import { Routes, Route } from "react-router-dom";

/* internal deps */
import Home from "../pages/Home";
import Diviflash from "../pages/Diviflash";
import NotFound from "../pages/NotFound";


// https://reactrouter.com/docs/en/v6/getting-started/tutorial

export default function Container() {
	return (
		<main>
			<section className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/diviflash" element={<Diviflash />} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</section>
		</main>
	);
}
