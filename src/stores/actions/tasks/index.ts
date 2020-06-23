import { createAction } from 'redux-actions';
import Task from '../../../api/models/tasks/Task';


export const RESOLVED = "Tasks.Resolved";
export const tasksResolved = createAction<Array<Task>, Array<Task>>(RESOLVED, p => p);

export const FETCHING = "Tasks.Fetching";
export const tasksFetching = createAction(FETCHING);

export const ERROR = "Tasks.Error";
export const tasksError = createAction<Error, Error>(ERROR, p => p);

export const SEARCH_BY_ID_CHANGED = "Tasks.SearchByIdChanged";
export const searchByIdChanged = createAction<string, string>(SEARCH_BY_ID_CHANGED, p => p);

export const SEARCH_BY_ORG_NAME_CHANGED = "Tasks.SearchByOrgNameChanged";
export const searchByOrgNameChanged = createAction<string, string>(SEARCH_BY_ORG_NAME_CHANGED, p => p);


