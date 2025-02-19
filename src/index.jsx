import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Logement from './Pages/Logement';
import Error from './Pages/Error';
import About from './Pages/About';
import "./styles/styles.sass"
import Header from './components/Header';
import Footer from './components/Footer';
import { DataProvider } from './context/DataProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <DataProvider>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={`/logement/:offerId`} element={<Logement />} />
                    <Route path="/a-propos" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            <Footer />
        </DataProvider>
    </Router> 
)