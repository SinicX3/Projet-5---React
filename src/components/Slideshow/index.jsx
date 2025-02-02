import iconR from '../../assets/chevron-right-solid.svg'
import iconL from '../../assets/chevron-left-solid.svg'
import { useState } from 'react'

function Slideshow () {

const [index, updateIndex] = useState(0)

const NextPic = () => {
    if (index < 4) {(updateIndex(index + 1))}
}

const PrevPic = () => {
    if (index > 0) {(updateIndex(index - 1))}
}

const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",   // Tableau à supprimer, ajouté uniquement
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",   // le temps de mettre au point le carroussel
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]

    return (<section>
        <div className="slideshow">
            <div className={`icons ${(pictures.length > 1) ? 'active' : ''}`} >
                <img src={iconL} className='iconL' onClick={PrevPic}/>
                <img src={iconR} className='iconR' onClick={NextPic}/>
                <p>{index + 1}/{pictures.length}</p>
                <img src={pictures[index]} className='pic'/>
            </div>
        </div>
    </section>
    )
}

export default Slideshow