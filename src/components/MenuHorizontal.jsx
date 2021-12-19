import React from 'react'
import { Link } from 'react-router-dom';
import { MagnifyingGlass, UserCircle, UserCirclePlus } from 'phosphor-react'



import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
		<div className='menu-horizontal-container'>
			<Link to='/' className="item-menu">
				<span className="text-item-menu">Tecnologia</span>
				
			</Link>
			<Link to='/' className="item-menu">
				<span className="text-item-menu">Saúde</span>
				
			</Link>
			<Link to='/' className="item-menu">
				<span className="text-item-menu">Economia</span>
			
			</Link>
      <Link to='/' className="item-menu">
				<span className="text-item-menu">Games</span>
			
			</Link>
      <Link to='/' className="item-menu">
      <span className="text-item-menu">Politica</span>
			
			</Link>
		</div>
	)
}

export default MenuHorizontal