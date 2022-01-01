/* external deps */
import {BrowserRouter} from "react-router-dom";

/* internal deps */
import "../sass/App.scss";
import Navigation from "./components/Navitgation";
import Container from "./components/AppBody";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation/>
                <Container/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
