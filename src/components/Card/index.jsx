import { Link } from "react-router-dom"

function Card({offer}) {

    return (
        <Link to="/logement" className="card">
            <img src={offer.cover}></img>
            <p>{offer.title}</p>
        </Link>
    )
}

export default Card