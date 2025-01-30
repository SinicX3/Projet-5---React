import LOGO from "../../assets/LOGO.png"
import { Link } from "react-router-dom"

function Header () {
    return (<header>
        <img src={LOGO} />
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a-propos">A propos</Link>
        </nav>
    </header>)
}

export default Header