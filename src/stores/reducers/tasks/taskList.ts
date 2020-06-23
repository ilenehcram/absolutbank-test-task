import {
    Action,
    handleActions
} from 'redux-actions';
import { combineReducers } from 'redux';

import {
    ERROR,
    FETCHING,
    RESOLVED,
    SEARCH_BY_ID_CHANGED,
    SEARCH_BY_ORG_NAME_CHANGED
} from "../../actions/tasks";
import Task from '../../../api/models/tasks/Task';

export interface TaskListState {
    searchByOrgName: string | null;
    searchById: string | null;
    fetching: boolean;
    tasks: Array<Task>;
    error: Error | null; 
}

export default combineReducers<TaskListState>({
    fetching: handleActions<boolean, void>({
        [FETCHING]: (state: boolean, action: Action<void>): boolean => true,
    }, false),
    tasks: handleActions<Array<Task>, Array<Task>>({
        [RESOLVED]: (state: Array<Task>, action: Action<Array<Task>>): Array<Task> => action.payload,
    }, new Array<Task>()),
    error: handleActions<Error | null, Error>({
        [ERROR]: (state: Error | null, action: Action<Error>): Error => action.payload,
    }, null),
    searchById: handleActions<string | null, string>({
        [SEARCH_BY_ID_CHANGED]: (state: string | null, action: Action<string>): string => action.payload,
    }, null),
    searchByOrgName: handleActions<string | null, string>({
        [SEARCH_BY_ORG_NAME_CHANGED]: (state: string | null, action: Action<string>): string => action.payload,
    }, null),
})