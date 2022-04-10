import React, { Component } from "react";
import { nanoid } from 'nanoid'
import {AddingContactForm} from './AddingContactForm/AddingContactForm'

export class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
  modelId = nanoid();

  render(){
    return (
      <>
      <h2>Phonebook</h2>
      <AddingContactForm/>
      {/* <form>
        <label>Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        <button type="submit">Add contact</button>
      </form> */}
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
