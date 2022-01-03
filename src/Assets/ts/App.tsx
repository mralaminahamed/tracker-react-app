/* external deps */
import { BrowserRouter } from "react-router-dom";

/* internal deps */
import "../sass/App.scss";
import Navigation from "./components/Navitgation";
import Container from "./components/AppBody";
import Footer from "./components/Footer";
import { DatabaseConnection } from "./middlewares/DatabaseConnection";

function App() {
    return (
        <DatabaseConnection>
            <BrowserRouter>
                <Navigation />
                <Container />
                <Footer />
            </BrowserRouter>
        </DatabaseConnection>
    );
}

export default App;
