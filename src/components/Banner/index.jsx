import PropTypes from "prop-types"
import background from "../../assets/Background.png"

function Banner ({ text, img }) {
    return (
            <section>
                <div className="banner">
                    <p>{text}</p>
                    <img className="img_1" src={img} />
                    <img className="img_2" src={background}/>
                </div>
            </section>
    )
}

Banner.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string
}

export default Banner