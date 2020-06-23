import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import TaskItem from '../TaskItem';

import {RootState} from "../../../../stores/rootReducer";
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 5px 5px 20% 5px;
`;

const TaskList: React.FC = props => {
    const taskList = useSelector((state: RootState) => state.taskList)
    return (
        <Container>{
            taskList.tasks.filter(t => 
                t.id.toString().indexOf(taskList.searchById || "") >= 0 
                &&
                t.order.organisation.name.indexOf(taskList.searchByOrgName || "") >= 0
            ).map(task => <TaskItem key={task.id} task={task}/>)
        }</Container>
    );
}

export default TaskList;