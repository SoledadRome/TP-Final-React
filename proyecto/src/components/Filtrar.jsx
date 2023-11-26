import React from 'react'

//Componente para la búsqueda de Personajes

export  const Filtrar = ({ filter, setFilter }) => {
	//Función que captura el evento cuando se tipea el personaje 
	const handleInput = ({ target }) => {
		setFilter(target.value)
	}


	return (
		//Formulario para introducir los datos de la búsqueda 
		<section className='filtrar'>
			<input className='finder'
				type='text'
				placeholder='Type your character'
				name='buscar'
				onChange={handleInput}
				value={filter}
			/>
			{/*Se ejecutó el evento onChange donde pasamos la funcion que captura el evento*/}
			<select id="Filtrar">
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
		</section>
	)
}


