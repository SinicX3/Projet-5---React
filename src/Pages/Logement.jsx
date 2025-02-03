import Slideshow from '../components/Slideshow';
import { useParams } from 'react-router-dom';
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

function Logement () {

    const offer = useParams()
    const data = useContext(DataContext)

    return (<div>
        <Slideshow pictures={data[1].pictures}/>
    </div>)
}

export default Logement