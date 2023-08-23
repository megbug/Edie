import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
    	<>
		<header className='header'>
			<h1 className='seoHeadline'>Edie</h1>
			<nav className='nav'>
				<Link>Home</Link>
				<Link>Services</Link>
				<Link>Our Works</Link>
				<Link>Clients</Link>
				<Link>Contact</Link>
			</nav>
		</header>
    	</>
  	)
}

export default Navbar