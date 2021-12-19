import React from 'react'
import { Link } from 'react-router-dom';

import { formatDate } from '../services/utils'
import './CardNews.css'

function CardNoticia(props) {
	return (
		<div className="card-container">
			<div>
				<span className="author">{props.autor}</span>
				<span className="date">{formatDate(props.publishData)}</span>
        
			</div>
			<Link to={props.idNoticia} className="title">
				<h2>{props.titulo}</h2>
        
			</Link>
     <img src={props.image} className="imagem"/>
		</div>
	)
}

export default CardNoticia