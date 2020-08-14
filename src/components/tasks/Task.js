import React, { useContext } from 'react';
import taskContext from '../../context/tasks/taskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({task}) => {

  //get state context project
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;
  
  //get state task
  const tasksContext= useContext(taskContext);
  const { deleteTask, getTask, changeStateTask, saveTaskActual } = tasksContext;

  const [projectActual] = project;

  //func delete
  const handleDeleteTask = id => {
	deleteTask(id);
	getTask(projectActual.id);
  }

  //change state task
  const handleState = task => {
	if(task.state){
	  task.state = false;
	}else{
	  task.state = true;
	}
	changeStateTask(task);
  }

  const handleEdit = task => {
	saveTaskActual(task);
  }

  return (
	<li className="tarea sombra">
	  <p>{task.name}</p>
	  <div className="estado">
		{task.state 
		  ?(
			<button
			  type="button"
			  className="completo"
			  onClick={() => handleState(task)}
			>Complete</button>
		  ):(
			<button
			  type="button"
			  className="incompleto"
			  onClick={() => handleState(task)}
			>Incomplete</button>
		  )
		}
	  </div>
	  <div className="acciones">
		<button
		  type="button"
		  className="btn btn-primario"
		  onClick={() => handleEdit(task)}
		>Edit</button>

		<button
		  type="button"
		  className="btn btn-secundario"
		  onClick={() => handleDeleteTask(task.id)}
		>Delete</button>
	  </div>
	</li>
  );
}

export default Task;
