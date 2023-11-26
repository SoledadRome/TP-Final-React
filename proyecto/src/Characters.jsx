import { useState, useEffect } from 'react'
import { Filtrar } from './components/Filtrar'
import { Cards } from './components/Card'

function Characters () {
	//Declarando valores de estado actual y posterior con useState
	const [personajes, setPersonajes] = useState([])
	const [loading, setLoading] = useState(true)
	const [filter, setFilter] = useState('')
    //Utilizando el Hook useEffect para traer la api
	useEffect(() => {
		const getPersonajes = async () => {
		 //solicitando la api mediante el método fetch y utilizando una función asincrona
			try {
				const response = await fetch(
					'https://rickandmortyapi.com/api/character'
				)
				const data = await response.json() //através de la variable 'response' traigo el formato JSON
				setPersonajes(data.results) //Convierto a objeto para que sea legible para la interfaz
				setLoading(false)
			//Método que detecta errores	
			} catch (error) {
				console.log(error)
			}
		}
		getPersonajes()
	}, [])
    //Constante para almacenar los personajes filtrados/búscados 
	const personjesFiltrados = personajes.filter((personaje) =>
		personaje.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) //Convertir a minuscula para que haya una coincidencia en las búsquedas
	)

	return (
		<div className='container'>
			<h1>Rick & Morty</h1>
			{/* Formulario de Búsqueda de personajes, asigno los parámetros de 'filter' y 'setfilter' para recibirlo como props*/}
			<Filtrar filter={filter} setFilter={setFilter} />

			{/* Listado de personajes, incorporo el componente de tarjetas (Cards) */}
			<section className='lista-personajes'>
				{/*Función que ejecuta la instrucción de mostrar los personajes mediante el metodo 'map' */}
				{/*Validación/Condición */}
				{loading ? (
					<p>Cargando...</p>
				) : personjesFiltrados.length > 0 ? (
					personjesFiltrados.map((personaje) => (
						<Cards key={personaje.id} personaje={personaje} />
					))
				) : (
					<p>
						No se encontran coincidencias de búsqueda{' '}
						<strong>"{filter}"</strong>.
					</p>
				)}
			  {/*utilizé la props key que busca por id. Operadores condicionales '?' = entonces, : = sino*/}
			</section>
			
		</div>
	)
}

export default Characters
 