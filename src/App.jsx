import { Routes, Route } from 'react-router-dom'; 

import LandingPage from './LandingPage';

import './App.css';
import './Mediaquery.css';

function App() {
	return (
    	<>
			<Routes>
				<Route path='/' element={<LandingPage/>}/>
			</Routes>
    	</>
	)
}

export default App
