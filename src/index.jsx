import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Pages/Home';
import Logement from './Pages/Logement';
import Error from './Pages/Error';
import "./styles/styles.sass"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>,
    document.getElementById('root')
)