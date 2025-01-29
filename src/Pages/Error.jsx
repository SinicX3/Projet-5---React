import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Error () {
    return (<div>
        <Header />
        <section id>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas </p>
            <Link to="/">Retourner à la page d'accueil</Link>
        </section>
        <Footer />
    </div>)
}

export default Error