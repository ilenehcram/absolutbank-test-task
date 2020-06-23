import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 5px; 
`;

interface Props {
    price: number;
}

const Price: React.FC<Props> = props => 
    <Container>
        {`${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`}
    </Container>

export default Price;