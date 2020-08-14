import React, { useReducer } from 'react';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
  FORM_PROJECT, 
  GET_PROJECTS,
  ADD_PROJECT,
  CHECK_FORM,
  PROJECT_ACTUAL,
  EXIT_PROJECT,
  DELETE_PROJECT
} from '../../types';
import { v4 as uuidv4 } from 'uuid';


const ProjectState = props => {

  const projects = [];

  const initState = {
	projects : [],
	newProject: false,
	errorForm: false,
	project: null
  }

    // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initState);

    //CRUD
  const showForm= () => {
	dispatch({
		type: FORM_PROJECT
	});
  }

  // Obtener los projectos
  const getProjects=  () => {
	dispatch({
	  type: GET_PROJECTS,
	  payload: projects 
	});
  }

  // Agregar nuevo projecto
  const addProject= project => {
	project.id = uuidv4();
	//Insert project in state
	dispatch({
	  type: ADD_PROJECT,
	  payload: project
	});
  }

	//valid form
  const showError = () => {
	dispatch({
	  type: CHECK_FORM
	});
  }

  //select project
  const projectActual = projectId => {
	dispatch({
	  type: PROJECT_ACTUAL,
	  payload: projectId
	});
  }

  //close project
  const closeProject = () => {
	dispatch({
	  type: EXIT_PROJECT
	});
  }

  //delete project
  const deleteProject = projectId => {
	dispatch({
	  type: DELETE_PROJECT,
	  payload: projectId
	});
  }
  	

    return (
        <projectContext.Provider
            value={{
			  projects: state.projects,
			  form: state.newProject,
			  errorForm: state.errorForm,
			  project: state.project,
			  showForm,
			  getProjects,
			  addProject,
			  showError,
			  projectActual,
			  closeProject,
			  deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
        
    )
}

export default ProjectState;
