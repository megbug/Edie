import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'

import instaIcon from '../images/instagram.svg';
import linkedIcon from '../images/linkedin.svg';
import twitterIcon from '../images/twitter.svg';
import Contact from './Contact';

const Footer = () => {
    return (
        <>
            <section className='footer' id='footer'>
                <nav className='footerLinks'>
                    <HashLink to='/#heroSection'>Home</HashLink>
                    <HashLink to='/#services'>Services</HashLink>
                    <HashLink to='/#work'>Our Work</HashLink>
                    <HashLink to='/#clients'>Clients</HashLink>
                    <HashLink to='/#footer'>Contact</HashLink>
                </nav>
                <article>
                    <p className='heebo'>Edie</p>
                    <Link><img src={instaIcon} alt='' /></Link>
                    <Link><img src={linkedIcon} alt='' /></Link>
                    <Link><img src={twitterIcon} alt='' /></Link>
                </article>
                <div>
                    <Contact /> 
                </div>
            </section>
            <u>created by <span>megbug</span> - devChallenges.io</u>
        </>
    )
}

export default Footer