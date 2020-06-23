import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import getTasks from "../../../../stores/selectors/tasks/getTasks";

import TaskItem from '../TaskItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px 5px 20% 5px;
`;

const TaskList: React.FC = () => {
    const tasks = useSelector(getTasks);
    return (
        <Container>
            {tasks.map(task => <TaskItem key={task.id} task={task}/>)}
        </Container>
    );
}

export default TaskList;