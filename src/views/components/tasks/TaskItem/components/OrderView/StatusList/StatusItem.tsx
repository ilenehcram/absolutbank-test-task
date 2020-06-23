import React from 'react';
import styled from 'styled-components';
import Status from '../../../../../../../api/models/statuses/Status';

const StatusSpan = styled.span`
    background-color: #C5C7DC;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 8px;
    color: #FFF;
    text-transform: uppercase;
    font-size: 12px;
    margin-top: 5px;
    margin-right: 5px;
`

interface Props {
    status: Status;
}

const StatusItem: React.FC<Props> = props => <StatusSpan>{props.status.label}</StatusSpan>;

export default StatusItem;