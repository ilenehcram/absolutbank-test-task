import React from 'react';
import styled from 'styled-components';

const TitleH3 = styled.h3`
    color: #151B3D;
    margin: 5px 0;
`;

interface Props {
    title: string;
}

const Title: React.FC<Props> = props => <TitleH3>{props.title}</TitleH3>

export default Title;