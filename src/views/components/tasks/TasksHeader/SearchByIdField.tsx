import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '../../ui/inputs/TextField';
import FieldWrapper from './FieldWrapper';
import { searchByIdChanged } from '../../../../stores/actions/tasks';

const SearchByIdField: React.FC = props => {

    const dispatch = useDispatch();

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByIdChanged(evt.target.value));
    }

    return (
        <FieldWrapper>
            <TextField
                placeholder={"Номер заявки"}
                onChange={onChange}
            />
        </FieldWrapper>
    );
}

export default SearchByIdField;