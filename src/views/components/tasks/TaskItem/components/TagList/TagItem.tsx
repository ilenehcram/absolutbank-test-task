import React from 'react';
import styled from 'styled-components';
import Tag from '../../../../../../api/models/tags/Tag';

const TagSpan = styled.span`
    background-color: #C5C7DC;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 5px 8px;
    color: #FFF;
    text-transform: uppercase;
    font-size: 12px;
    margin-right: 5px;
`

interface Props {
    tag: Tag;
}

const TagItem: React.FC<Props> = props => <TagSpan>{props.tag.label}</TagSpan>;

export default TagItem;