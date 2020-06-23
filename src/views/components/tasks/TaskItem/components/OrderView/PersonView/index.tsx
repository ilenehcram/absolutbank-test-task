import React from 'react';
import styled from 'styled-components';

import Person from '../../../../../../../api/models/orders/Person';

const Container = styled.div`
    background-color: #EAECF5;
    padding: 10px;
    margin: 0px -10px 5px -10px;
`;

interface Props {
    person: Person
}

const PersonView: React.FC<Props> = props => (
    <Container>
        {`${props.person.surname} ${props.person.name.charAt(0)}. ${props.person.patronymic.charAt(0)}.`}
    </Container>
);

export default PersonView;