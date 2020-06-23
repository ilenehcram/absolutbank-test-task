import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`;

interface Props {
    name: string;
}

const OrganisationName: React.FC<Props> = props => <Container>{props.name}</Container>

export default OrganisationName;