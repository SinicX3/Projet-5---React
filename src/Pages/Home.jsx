import Banner from '../components/Banner';
import CardWrapper from '../components/CardWrapper';
import banner from "../assets/Banner.jpg";

function Home () {
    return (<div>
        <Banner text={"Chez vous, partout et ailleurs"} img={banner}/>
        <CardWrapper />
    </div>)
}

export default Home