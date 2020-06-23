import React from 'react';
import styled from 'styled-components';
import SearchByIdField from './SearchByIdField';
import SearchByTitleField from './SearchByTitleField';

const Container = styled.div`
    display: flex;
    padding: 10px;
`;

const TasksHeader: React.FC = props => 
    <Container>
        <SearchByIdField/>
        <SearchByTitleField/>
    </Container>

export default TasksHeader;