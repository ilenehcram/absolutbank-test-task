import React from 'react';
import styled from 'styled-components';

import TaskId from './TaskId';
import TaskDate from './TaskDate';

const Container = styled.div``;

interface Props {
    taskId: number;
    taskDate: Date;
}

const Footer: React.FC<Props> = props => (
    <Container>
        <TaskId id={props.taskId}/>
        <TaskDate date={props.taskDate}/>
    </Container>
)

export default Footer;