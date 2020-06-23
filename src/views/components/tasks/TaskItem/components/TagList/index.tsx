import React from 'react';
import styled from 'styled-components';

import Tag from '../../../../../../api/models/tags/Tag';
import TagItem from './TagItem';

const Container = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    margin-bottom: 5px;
`;

interface Props {
    tags: Array<Tag>
}

const TagList: React.FC<Props> = props => (
    <Container>
        {props.tags.map(tag => <TagItem key={tag.id} tag={tag}/>)}
    </Container>
);

export default TagList;