import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import banner from '../assets/Banner-about.png'
import TextWrapper from '../components/TextWrapper';

function About () {
    return (<div>
        <Header />
        <Banner text='' img={banner}/>
        <section>
            <TextWrapper text="Fiabilité"/>
            <TextWrapper text="Respect"/>
            <TextWrapper text="Service"/>
            <TextWrapper text="Sécurité"/>
        </section>
        <Footer />
    </div>)
}

export default About