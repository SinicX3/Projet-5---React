import { Link } from 'react-router-dom';

function Error () {
    return (<div>
        <section id="error">
            <h1>404</h1>
            <p>Oups! La page que <br className='responsive_br'/> vous demandez n&apos;existe pas</p>
            <div>
                <Link to="/">Retourner à la page d&apos;accueil</Link>
            </div>
        </section>
    </div>)
}

export default Error