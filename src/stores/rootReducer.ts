import { combineReducers } from 'redux';
import taskList, { TaskListState } from './reducers/tasks/taskList';

export interface RootState {
    taskList: TaskListState;
}

export const rootReducerMap = {
    taskList: taskList
}

const rootReducer = () => 
    combineReducers(rootReducerMap);

export default rootReducer;