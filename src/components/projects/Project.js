import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Project = ({pro}) => {
  
  //get state context
  const projectsContext = useContext(projectContext);
  const { project, projectActual, closeProject } = projectsContext;

  //get state context task
  const tasksContext= useContext(taskContext);
  const { getTask } = tasksContext;

  //funct add proyect actual
  const selectProject = id => {
	projectActual(id);
	getTask(id);
  }

  const handleOnClick = () => {
	if(project){
	  const [ projectActual ] = project;
	  if(projectActual.id === pro.id){
		closeProject();
		return;
	  }
	}
	selectProject(pro.id);
  }

  return (
	<li>
	  <button
		type="button"
		className="btn btn-blank"
		onClick={handleOnClick}
	  >{pro.name}</button>
	</li>
  );
}

export default Project;
