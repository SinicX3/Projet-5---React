import { useEffect, useState } from 'react'
import Card from '../Card'
import offers from "../../data/annonces.json"

function CardWrapper() {

const [data, updateData] = useState([])
useEffect(() => {
    fetch(offers)
        .then(console.log(offers))
}, [])
    
    return (
        <section>
            <div className="card_container">
                <div className="card_wrapper">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
)
}

export default CardWrapper