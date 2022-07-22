import React from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class';
import TaskComponent from "../pure/task";

const TaskListComponent = () => {

	// DEFINIMOS LOS VALORES DE LA TAREA POR DEFECTO AL CREARLA
	const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

	// CAMBIAR ESTADO: RECIBE ID DE LA TAREA Y ESTADO A CAMBIAR
	/* const changeState = (id) => {
		console.log('TODO: cambiar estado de la tarea');
	}; */

	return (
		<div>
			<h1>
				Tu lista de tareas:
			</h1>
			{/* TODO: Aplicar un for/map para renderizar una lista de tareas */ }
			{/* aqui le pasamos la props task y le damos el valor de default task */ }
			<TaskComponent task={ defaultTask } ></TaskComponent>
		</div>
	);
};


export default TaskListComponent;
