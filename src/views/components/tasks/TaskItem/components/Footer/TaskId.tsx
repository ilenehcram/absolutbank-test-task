import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
    margin-right: 20px;
`

interface Props {
    id: number;
}

const TaskId: React.FC<Props> = props => <StyledSpan>{props.id}</StyledSpan>

export default TaskId;