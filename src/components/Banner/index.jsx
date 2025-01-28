import img from "../../assets/Banner.jpg"
import background from "../../assets/Background.png"

function Banner () {
    return (
            <section>
                <div className="banner">
                    <p>Chez vous, partout et ailleurs</p>
                    <img className="img_1" src={img} />
                    <img className="img_2" src={background}/>
                </div>
            </section>
    )
}

export default Banner