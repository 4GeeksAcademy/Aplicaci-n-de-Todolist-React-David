import React, {useState} from "react";

//create your first component
const Home = () => {
	//declara los estados que voy a implementar

	const [nuevaTarea, setNuevaTarea]= useState("")
	const [tareas, setTareas] = useState(["Make the bed", "wash my hands"])

	// crear la funcion manejadora

	const actualizarValorNuevaTarea = (event) => {
		setNuevaTarea(event.target.value)
	}
	const adicionarNuevaTarea = (event) => {
		event.preventDefault()
		setTareas([...tareas,nuevaTarea])
		setNuevaTarea("")

	}
	const borrarElementos = (index) => {
		const arrayModificado = tareas.filter ((item, i) => i !== index)
		setTareas(arrayModificado)
	
	}

	return (
		<div className="text-center container">
			<h1 className="text-center mt-4">My Todos</h1>
		
			<form onSubmit={adicionarNuevaTarea}>
				<div className="mb-3">
					<input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={nuevaTarea} onChange={actualizarValorNuevaTarea} />

				</div>
				<button type="submit" className="btn btn-primary">submit</button>
				
			</form>
			<ul>
				{
				   tareas.map((item, index) => {
					return (<li key={index}>{item} <button className="btn btn-primary d-flex justify-content-end" onClick={() => borrarElementos(index)}>X</button></li>)
				   })
				}
			</ul>
			{tareas.length === 0 ? <span> No task, add a task</span> : <span> {tareas.length} item left</span>}

		</div>
		
	);
};

export default Home;
