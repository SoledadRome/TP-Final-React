import React from 'react'

//Componente que contiene las tarjetas

export const Cards = ({ personaje }) => {
	return (
		<section className='tarjeta'>
			{/*Aplico las props para poder mapear luego los personajes*/}
			<div className='container-tarjeta'>
				<div>
					<img className='img-card' src={personaje.image} alt={personaje.name} />
				</div>

				<h2>{personaje.name}</h2>
				<p>
					<span>Species: </span>
					<span>{personaje.species}</span>
				</p>
				<p>
					<span>Gender: </span>
					<span>{personaje.gender}</span>
				</p>
			</div>
		</section>
	)
}