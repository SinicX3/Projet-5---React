import { useEffect, useState } from 'react'
import Card from '../Card'
import offers from "../../data/annonces.json"

function CardWrapper() {

    useEffect(() => {                                                       // A noter que l'on pourrait directement initialiser le state sur les fichiers importés localement.
        fetch(offers)                                                       // Mais le composant doit pouvoir s'adapter même après l'implantation du backend. Ce fetch servira
    }, [])                                                                  // lorsque celui-ci sera en place.
    
    const [data, updateData] = useState([offers][0])
    const cards = []
    
    data.forEach((element, index) => {                                               // Création du tableau des logements à afficher
        cards.push(<Card key={index} offer={element}/>)
    }, []);

    return (
        <section>
            <div className="card_container">
                <div className="card_wrapper">
                    {cards}
                </div>
            </div>
        </section>
    )
}

export default CardWrapper