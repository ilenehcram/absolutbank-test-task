import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

interface Props {
    tin: string;
}

const OrganisationTIN: React.FC<Props> = props => <Container>{`ИНН ${props.tin}`}</Container>;

export default OrganisationTIN;