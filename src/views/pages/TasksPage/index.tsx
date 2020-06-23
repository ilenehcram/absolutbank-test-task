import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import TasksHeader from '../../components/tasks/TasksHeader';
import TaskList from '../../components/tasks/TaskList';
import fetchTasks from '../../../stores/thunks/tasks/fetchTasks';

const Container = styled.div`
    background-color: #FAFBFD;
`;

const TasksPage: React.FC = props => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    return (
        <Container>
            <TasksHeader/>
            <TaskList/>
        </Container>
    );
}

export default TasksPage;