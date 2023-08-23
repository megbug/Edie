import { Link } from 'react-router-dom';

import instaIcon from '../images/instagram.svg';
import linkedIcon from '../images/linkedin.svg';
import twitterIcon from '../images/twitter.svg';
import Contact from './Contact';

const Footer = () => {
    return (
        <>
            <section className='footer' id='footer'>
                <nav>
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Our Works</Link>
                    <Link>Clients</Link>
                    <Link>Contact</Link>
                </nav>
                <article>
                    <p>Edie</p>
                    <Link><img src={instaIcon} alt='' /></Link>
                    <Link><img src={linkedIcon} alt='' /></Link>
                    <Link><img src={twitterIcon} alt='' /></Link>
                </article>
                <Contact />
            </section>
            <p>By megbug</p>
        </>
    )
}

export default Footer