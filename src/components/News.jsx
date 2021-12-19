import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import CardNews from './CardNews'
import api from '../services/api'
import './News.css'

function News() {

	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<main className='news-container'>

			{
				noticias.map(noticia => {
					return (
						<div key={noticia._id}>
							<CardNews titulo={noticia.titulo} autor={noticia.autor} idNoticia={noticia._id} publishData={noticia.data_publicacao} 
              image={noticia.image}/>
						</div>
					)
				})
			}

		</main>
	)
}

export default News