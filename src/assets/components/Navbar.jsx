import { HashLink as Link } from 'react-router-hash-link'

const Navbar = () => {
	return (
    	<>
		<header className='header'>
			<h1 className='heebo'>Edie</h1>
			<nav className='nav'>
				<Link to='/#heroSection' >Home</Link>
				<Link to='/#services'>Services</Link>
				<Link to='/#work'>Our Work</Link>
				<Link to='/#clients'>Clients</Link>
				<Link to='/#footer'>Contact</Link>
			</nav>
		</header>
    	</>
  	)
}

export default Navbar