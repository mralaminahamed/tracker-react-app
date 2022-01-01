/* external deps */
import { Routes, Route } from "react-router-dom";

/* internal deps */
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Diviflash from "../pages/Diviflash";
import Login from "../pages/Login";

// https://reactrouter.com/docs/en/v6/getting-started/tutorial

export default function Container() {
    return (
        <main>
            <section className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/diviflash" element={<Diviflash />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </section>
        </main>
    );
}
