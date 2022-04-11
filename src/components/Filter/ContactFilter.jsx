import React from "react";
import {InputOnContactForm} from '../App.styled';

export const ContactFilter = ({filterValue, onChange}) => {
    return (
        <label htmlFor="filter">Search
            <InputOnContactForm
                type="text"
                name="filter"
                title="Searching contact" 
                value={filterValue}
                onChange={onChange}      
            />
        </label>
    );
};