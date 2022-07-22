import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class";

// le pasamos la props task
const TaskComponent = ({ task }) => {
	return (
		<div>
			<h2>
				Nombre de la tarea:{ task.name }
			</h2>
			<h3>
				Descripción: { task.description }
			</h3>
			<h4>
				Nivel de la tarea: { task.level }
			</h4>
			<h5>
				Esta tarea está: { task.completed ? "COMPLETADA" : "PENDIENTE" }
			</h5>
		</div>
	);
};

// instanceof Task es para que reciba los valores de la clase tarea: le pasamos una instancia de Task
TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
