import Banner from '../components/Banner';
import CardWrapper from '../components/CardWrapper';
import banner from "../assets/Banner.jpg";

function Home () {
    return (<main>
        <Banner text={"Chez vous, partout et ailleurs"} img={banner}/>
        <CardWrapper />
    </main>)
}

export default Home