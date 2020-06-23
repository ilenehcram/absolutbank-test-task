import React from 'react';
import styled from 'styled-components';

import Status from '../../../../../../../api/models/statuses/Status';
import StatusItem from './StatusItem';

const Container = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;

interface Props {
    statuses: Array<Status>;
}

const StatusList: React.FC<Props> = props => (
    <Container>
        {props.statuses.map(status => <StatusItem key={status.id} status={status}/>)}
    </Container>
);

export default StatusList;