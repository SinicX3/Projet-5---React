import iconR from '../../assets/chevron-right-solid.svg'
import iconL from '../../assets/chevron-left-solid.svg'
import { useState } from 'react'

function Slideshow ({ pictures }) {

    const [index, updateIndex] = useState(0)

    const NextPic = () => {
        if (index < (pictures.length-1)) {(updateIndex(index + 1))}
    }
    const PrevPic = () => {
        if (index > 0) {(updateIndex(index - 1))}
    }

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