import Slideshow from '../components/Slideshow';
import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'
import TextWrapper from '../components/TextWrapper';
import Tags from '../components/Tags';
import Rating from '../components/Rating';

function Logement () {

    const reqId = useParams()                                                           // L'ID du logement demandé
    const data = useContext(DataContext)                                                // L'ensemble des données stockées dans le contexte
    const offer = data.find(data => data.id === reqId.offerId)                          // On récupère les données du logement dans le contexte à partir de l'ID

    return (<main>
        <Slideshow pictures={offer.pictures}/>
        <section className='offer_tags'>
            <div>
                <div>
                    <h1>{offer.title}</h1>
                    <p>{offer.location}</p>
                </div>
                <Tags tags={offer.tags} />
            </div>
            <div className='host_rating'>
                <div className='host'>
                    <p>{offer.host.name}</p>
                    <img src={offer.host.picture} />
                </div>
                <Rating rating={offer.rating}/>
            </div>
        </section>
        <section className='wrapper_offer'>
            <TextWrapper text="Description" desc={offer.description}/>
            <TextWrapper text="Equipements" desc={offer.equipments}/>
        </section>
    </main>)
}

export default Logement