import React, { useContext, useEffect } from 'react';
import Project from './Project';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const ListProjects = () => {

  //Extrar projects del state 
  const projectsContext = useContext(projectContext);
  const { projects, getProjects } = projectsContext;

  useEffect(() => {
	getProjects();
	//eslint-disable-next-line
  },[])

  //mostrar si hay proyectos
  if (projects.length === 0) return <p></p>;

  return (
	<ul className="listado-proyectos">
		<TransitionGroup>
		  { projects.map(project => (
			<CSSTransition
			  key={project.id}
			  timeout={300}
			  classNames="proyecto"
			>	
			  <Project 
				  pro={project}
			  />
			</CSSTransition>
		  ))}
		</TransitionGroup>
	</ul>
  );
}

export default ListProjects;
