import React, { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 
import {AddingContactForm} from './AddingContactForm/AddingContactForm';
import {Title} from './App.styled';
import {ContactList} from './ContactList/ContactList';
import {ContactFilter} from './Filter/ContactFilter';

export class App extends Component{
  state = {
    contacts: 
      [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
    filter: '',
    name: '',
    number: ''
  }

  makingContact = ({name,number}) => {
    const contactObject={};
    contactObject.id=nanoid();
    contactObject.name=name;
    contactObject.number=number;
    return contactObject;
  };

  addContact = (data) => {
    const newContact=this.makingContact(data);
    this.setState(prevState => ({ contacts:[newContact, ...prevState.contacts]}));
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value});
};

  render(){
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(
      data => data.name.toLowerCase().includes(normalizedFilter)
   );

    return (
      <>
      <Title>Phonebook</Title>
      <AddingContactForm
          onSubmit={this.addContact}
      />
      <Title>Contacts</Title>
      <ContactFilter
        filterValue={this.state.filter}
        onChange={this.changeFilter}
      />
      <ul>
          <ContactList
            contacts={visibleContacts}
          />
      </ul>
      
      </>
      
    );
  };
  
    
};



ContactList.propTypes={contacts:PropTypes.array};