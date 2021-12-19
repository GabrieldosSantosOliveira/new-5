import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import NewsDetails from './components/NewsDetails'
import Logo from './components/Logo'
import MenuHorizontal from './components/MenuHorizontal'

import Footer from './components/Footer'
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className='grid-container'>
				<MenuHorizontal />
				
				<Footer />
				<Logo />
				<Routes>
					<Route path='/' element={<News />} />
					<Route path=':idNoticia' element={<NewsDetails />} />
				</Routes>
			</div>
		</BrowserRouter>

	);
}

export default App;