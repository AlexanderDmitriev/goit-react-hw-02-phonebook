import React from "react";
import {InputOnContactForm, LabelText} from '../App.styled';

export const ContactFilter = ({filterValue, onChange}) => {
    return (
        <LabelText htmlFor="filter">Search
            <InputOnContactForm
                type="text"
                name="filter"
                title="Searching contact" 
                value={filterValue}
                onChange={onChange}      
            />
        </LabelText>
    );
};