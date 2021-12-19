import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

import { formatDate } from '../services/utils'
import api from '../services/api'
import './NewsDetails.css'

function NewsDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(async response => {
				let {data_publicacao, ...rest} = response.data
				data_publicacao = await formatDate(data_publicacao)
				await setNoticia({data_publicacao, ...rest})
				// setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
			<div className="details-container">
				<div>
					<span className="author">{noticia.autor}</span>
					<span className="date">{noticia.data_publicacao}</span>

				</div>
				<div className="title">
					<h2>{noticia.titulo}</h2>
					<h3 className='description'>{noticia.descricao}</h3>
				</div>
			</div>
			<div className="text">
				{noticia.conteudo}
			</div>
      <div>
				<center><img src={noticia.image} className="imagem"/></center>
			</div>
		</article>
	)
}

export default NewsDetails