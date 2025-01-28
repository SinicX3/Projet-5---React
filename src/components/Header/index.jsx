import LOGO from "../../assets/LOGO.png"

function Header () {
    return (<header>
        <img src={LOGO} />
        <nav>
            <a href="">Accueil</a>
            <a href="">A propos</a>
        </nav>
    </header>)
}

export default Header