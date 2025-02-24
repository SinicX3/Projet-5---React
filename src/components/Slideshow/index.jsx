import iconR from '../../assets/chevron-right-solid.svg'
import iconL from '../../assets/chevron-left-solid.svg'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Slideshow ({ pictures }) {

    const [index, updateIndex] = useState(0)

    const NextPic = () => {
        if (index < (pictures.length-1)) {(updateIndex(index + 1))}
        if (index === (pictures.length-1)) {(updateIndex(0))}
    }
    const PrevPic = () => {
        if (index > 0) {(updateIndex(index - 1))}
        if (index === 0) {(updateIndex(pictures.length-1))}
    }

        return (<section>
            <div className="slideshow">
                <div className={`icons ${(pictures.length > 0) ? 'active' : ''}`} >
                    <img src={iconL} className={`iconL ${(pictures.length > 1) ? 'active' : 'none'}`} onClick={PrevPic}/>
                    <img src={iconR} className={`iconR ${(pictures.length > 1) ? 'active' : 'none'}`} onClick={NextPic}/>
                    <p className={(pictures.length > 1) ? null : 'none'}>{index + 1}/{pictures.length}</p>
                    <img src={pictures[index]} className='pic'/>
                </div>
            </div>
        </section>
        )
}

Slideshow.propTypes = {
    pictures: PropTypes.array
}

export default Slideshow