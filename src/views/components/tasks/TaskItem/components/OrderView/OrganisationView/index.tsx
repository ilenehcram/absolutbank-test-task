import React from 'react';
import Organisation from '../../../../../../../api/models/orders/Organisation';
import OrganisationName from './OrganisationName';
import OrganisationTIN from './OrganisationTIN';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 5px; 
`;

interface Props {
    organisation: Organisation;
}

const OrganisationView: React.FC<Props> = props => (
    <Container>
        <OrganisationName name={props.organisation.name}/>
        <OrganisationTIN tin={props.organisation.tin}/>
    </Container>
);

export default OrganisationView;