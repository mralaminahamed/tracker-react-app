/* external deps */
import {BrowserRouter} from "react-router-dom";

/* internal deps */
import "../sass/App.scss";
import Navigation from "./Components/Navitgation";
import Container from "./Components/AppBody";
import Footer from "./Components/Footer";

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
