import {
  TASK_PROJECT,
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  STATE_TASK,
  TASK_ACTUAL,
  TASK_UPDATE,
  CLEAN_TASK
} from '../../types';

export default (state, action) => {
  switch(action.type) {
	case TASK_PROJECT:
	  return {
		...state,
		tasksproject: state.tasks.filter(task => task.projectId === action.payload)
	  }
	case ADD_TASK:
	  return {
		...state,
		tasks: [action.payload, ...state.tasks],
		errortask: false
	  }
	case CHECK_TASK:
	  return {
		...state,
		errortask: true
	  }
	case DELETE_TASK:
	  return {
		...state,
		tasks: state.tasks.filter(task => task.id !== action.payload)
	  }
	case TASK_UPDATE:
	case STATE_TASK:
	  return{
		...state,
		tasks:  state.tasks.map(task => task.id === action.payload.id ? action.payload : task) 
	  }
	case TASK_ACTUAL:
	  return {
		...state,
		taskactual: action.payload
	  }
	case CLEAN_TASK:
	  return {
		...state,
		taskactual: null
	  }
	default:
	  return state;
  }
}
