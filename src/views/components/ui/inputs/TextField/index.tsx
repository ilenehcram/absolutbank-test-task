import React from 'react';
import Wrapper from './Wrapper';
import IconWrapper from './IconWrapper';
import SearchIcon from './SearchIcon';
import TextInput from './TextInput';
import PrefixWrapper from './PrefixWrapper';

interface Props {
    placeholder: string;
    onChange(evt: React.ChangeEvent<HTMLInputElement>): void;
}

const TextField: React.FC<Props> = props => 
    <Wrapper>
        <PrefixWrapper>
            <IconWrapper>
                <SearchIcon/>
            </IconWrapper>
        </PrefixWrapper>
        <TextInput
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </Wrapper>

export default TextField;