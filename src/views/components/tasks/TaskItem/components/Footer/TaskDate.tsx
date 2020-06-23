import React from 'react';

interface Props {
    date: Date;
}

const TaskDate: React.FC<Props> = props => 
    <span>{`от ${props.date.toLocaleDateString()}`}</span>

export default TaskDate;