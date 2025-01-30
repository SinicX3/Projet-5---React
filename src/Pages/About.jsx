import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import banner from '../assets/Banner-about.png'

function About () {
    return (<div>
        <Header />
        <Banner text='' img={banner}/>
        <Footer />
    </div>)
}

export default About