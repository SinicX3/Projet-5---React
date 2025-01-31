import iconR from '../../assets/chevron-right-solid.svg'
import iconL from '../../assets/chevron-left-solid.svg'

function Slideshow () {

const pictures = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",   // Tableau à supprimer, ajouté uniquement
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",   // le temps de mettre au point le carroussel
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"]

    return (<section>
        <div className="slideshow">
            <div className='icons'>
                <img src={iconL} className='iconL'/>
                <img src={iconR} className='iconR'/>
            </div>
            <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg" className='pic'/>
        </div>
    </section>
    )
}

export default Slideshow