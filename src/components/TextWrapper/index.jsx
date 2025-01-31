import icon from '../../assets/chevron-up-solid.svg'
import { useState } from 'react'

function TextWrapper({text, desc}) {

const [rotate, setRotate] = useState(false)

const handleClick = () => {
        setRotate(!rotate)
    }

    return (<section>
        <div className={`text_wrapper ${rotate ? 'active' : ''}`}>
           <p>{text}</p>
           <img src={icon} onClick={handleClick} />
        </div>
        <div className={`desc ${rotate ? 'active' : ''}`}>
            <span>{desc}</span>
        </div>
    </section>)
}

export default TextWrapper