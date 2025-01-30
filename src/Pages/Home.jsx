import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CardWrapper from '../components/CardWrapper';
import banner from "../assets/Banner.jpg";

function Home () {
    return (<div>
        <Header />
        <Banner text='Chez vous, partout et ailleurs' img={banner}/>
        <CardWrapper />
        <Footer />
    </div>)
}

export default Home