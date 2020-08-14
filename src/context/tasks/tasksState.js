import React, { useReducer } from 'react'; import taskContext from './taskContext';
import TaskReducer from  './taskReducer';
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
import { v4 as uuidv4 } from 'uuid';

const TaskState = props => {
  const initialState = {
	tasks: [],
	tasksproject: null,
	errortask: false,
	taskactual: null
  }

  //dispatch & state
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  //CRUD
  const getTask = projectId => {
	dispatch({
	  type: TASK_PROJECT,
	  payload: projectId 
	})
  }

  const addTask =  task => {
	task.id = uuidv4();
	dispatch({
	  type: ADD_TASK,
	  payload: task
	})
  }

  const checkTask = () => {
	dispatch({
	  type: CHECK_TASK
	})
  }

  const deleteTask = id => {
	dispatch({
	  type: DELETE_TASK,
	  payload: id
	})
  }

  const changeStateTask = task => {
	dispatch({
	  type: STATE_TASK,
	  payload: task
	})
  }

  const saveTaskActual = task => {
	dispatch({
	  type: TASK_ACTUAL,
	  payload: task
	})
  }

  const updateTask = task => {
	dispatch({
	  type: TASK_UPDATE,
	  payload: task
	})
  }

  const cleanFormTask = () => {
	dispatch({
	  type: CLEAN_TASK
	})
  }

  return (
	<taskContext.Provider
	  value={{
		tasks: state.tasks,
		tasksproject : state.tasksproject,
		errortask: state.errortask,
		taskactual: state.taskactual,
		getTask,
		addTask,
		checkTask,
		deleteTask,
		changeStateTask,
		saveTaskActual,
		updateTask,
		cleanFormTask
	  }}
	>
	  {props.children}
	</taskContext.Provider>
  )
}

export default TaskState;
