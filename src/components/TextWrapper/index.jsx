import icon from '../../assets/chevron-up-solid.svg'
import { useState } from 'react'
import PropTypes from "prop-types"

function TextWrapper({text, desc}) {

const [rotate, setRotate] = useState(false)

const handleClick = () => {
        setRotate(!rotate)
    }

    return (<div className='wrappers'>
        <div className={`text_wrapper ${rotate ? 'active' : ''}`}>
           <p>{text}</p>
           <img src={icon} onClick={handleClick} />
        </div>
        <div className={`desc ${rotate ? 'active' : ''}`}>
            {Array.isArray(desc) ? (                                                            
                    desc.map((element, index) => <span key={index}>{element}</span>)
                ) : (
                    <span>{desc}</span>
                )}
        </div>
    </div>)
}

TextWrapper.propTypes = {
    text: PropTypes.string,
    desc: PropTypes.any
}

export default TextWrapper