import { 
  FORM_PROJECT, 
  GET_PROJECTS,
  ADD_PROJECT,
  CHECK_FORM,
  PROJECT_ACTUAL,
  EXIT_PROJECT,
  DELETE_PROJECT
} from '../../types';

export default (state, action) => {
  switch(action.type) {
	case FORM_PROJECT:
	  if(state.newProject){
		return {
		  ...state,
		  newProject: false
		}
	  }
	  return {
		...state,
		newProject: true
	  }
	case GET_PROJECTS:
	  return {
		...state,
		projects: action.payload
	  }
	case ADD_PROJECT:
	  return {
		...state,
		projects: [action.payload, ...state.projects],
		newProject: false,
		errorForm: false
	  }
	case CHECK_FORM:
	  return {
		...state,
		errorForm: true
	  }
	case PROJECT_ACTUAL:
	  return {
		...state,
		project: state.projects.filter(project => project.id === action.payload)
	  }
	case EXIT_PROJECT:
	  return {
		...state,
		project: null  
	  }
	case DELETE_PROJECT:
	  return {
		...state,
		projects: state.projects.filter(project => project.id !== action.payload),
		project: null
	  }
	default:
	  return state;
  }
}
