import React, { Component } from "react";
import { nanoid } from 'nanoid'
import {AddingContactForm} from './AddingContactForm/AddingContactForm'

export class App extends Component{
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  modelId = nanoid();

  render(){
    return (
      <>
      <h2>Phonebook</h2>
      <AddingContactForm/>
      <h2>Contacts</h2>
      <ul>
        <li>Adrian</li>
        <li>Jacob Mercer</li>
        <li>Charles de Batz de Castelmore d'Artagnan</li>
      </ul>
      </>
      
    );
  };
  
    
};
