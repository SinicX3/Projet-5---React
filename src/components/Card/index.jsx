import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function Card({offer}) {

    return (
        <Link to={`/logement/${offer.id}`} className="card">
            <img src={offer.cover}></img>
            <p>{offer.title}</p>
        </Link>
    )
}

Card.propTypes = {
    offer: PropTypes.shape({
        id: PropTypes.string,
        cover: PropTypes.string,
        title: PropTypes.string
    })
}

export default Card