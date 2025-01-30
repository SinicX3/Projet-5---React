function Card({offer}) {

    return (
        <div className="card">
            <img src={offer.cover}></img>
            <p>{offer.title}</p>
        </div>
    )
}

export default Card