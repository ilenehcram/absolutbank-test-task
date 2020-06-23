import { Action, Dispatch } from 'redux';
import { tasksFetching, tasksResolved, tasksError } from '../../actions/tasks';
import { getTasks } from '../../../api/tasks';

export default () => (
    dispatch: Dispatch<Action>
) => {
    dispatch(tasksFetching());
    getTasks().then(r => {
        dispatch(tasksResolved(r.data.tasks));
    }).catch(e => {
        dispatch(tasksError(e));
    });
}