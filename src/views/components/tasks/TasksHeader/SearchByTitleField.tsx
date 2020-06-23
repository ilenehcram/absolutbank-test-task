import React from 'react';
import { useDispatch } from 'react-redux';
import TextField from '../../ui/inputs/TextField';
import FieldWrapper from './FieldWrapper';
import { searchByOrgNameChanged } from '../../../../stores/actions/tasks';

const SearchByOrganisationNameField: React.FC = props => {

    const dispatch = useDispatch();

    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchByOrgNameChanged(evt.target.value));
    }

    return (
        <FieldWrapper>
            <TextField
                placeholder={"Наименование клиента"}
                onChange={onChange}
            />
        </FieldWrapper>
    );
}

export default SearchByOrganisationNameField;