import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Error () {
    return (<div>
        <Header />
        <section id="error">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas </p>
            <div>
                <Link to="/">Retourner à la page d&apos;accueil</Link>
            </div>
        </section>
        <Footer />
    </div>)
}

export default Error