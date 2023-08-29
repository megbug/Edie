import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import useScreenSize from './useScreenSize';

import BurgerMenu from '../images/bars-solid.svg';

const Navbar = () => {

    const screenSize = useScreenSize();
    
    let isDesktop = screenSize[0] < 501;

    let [menu, setMenu] = useState(false);

    const showMenu = () => {
        return (
            setMenu((prev) => !prev) 
        )
    }

	return (
        <header className={isDesktop ? 'mobileHeader' : 'desktopHeader'}>
			<div className='mobileContainer'>
                <h1 className='heebo'>Edie</h1>
                <button onClick={showMenu}><img src={BurgerMenu} alt='' /></button>
            </div>
                <nav className={ menu ? 'mobileNav' : 'nav'}>
                    <div className='menuItems'>
                        <Link to='/#heroSection'>Home</Link>
                        <Link to='/#services'>Services</Link>
                        <Link to='/#work'>Our Work</Link>
                        <Link to='/#clients'>Clients</Link>
                        <Link to='/#footer'>Contact</Link>
                    </div>
                </nav>
		</header>
  	)
}

export default Navbar