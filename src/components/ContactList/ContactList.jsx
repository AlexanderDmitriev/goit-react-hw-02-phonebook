import { nanoid } from 'nanoid';
import {ContactListItem} from './ContactList.styled'

export const ContactList = ({contacts}) => {

    return (      
    <>
        {contacts.map(data => 
        <ContactListItem key={nanoid()}>
            {data.name} - {data.number}
        </ContactListItem>)}
    </>);
};