import React, { Component } from 'react';
import ContactForm from './components/ СontactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import {v4 as uuidv4} from 'uuid';


class App extends Component{
  state = {
    contacts: [],
    filter: '',
  }

  addContact = (search) => {
    const searchName = this.state.contacts
    .map((contact) => contact.name)
    .includes(search.name);

    if(searchName) {
      alert (`${search.name} уже есть в контактах`);

    } else if (search.name.length === 0) {
      alert(`Поля обязательны для заполнения!`);

    } else {
      const contact = {
        ...search,
        id: uuidv4(),
            };

      this.setState(({contacts}) => ({
        contacts: [...contacts,contact],
      }));
    }

};

 changeFilter = (filter) => {
this.setState({filter});

};

 getVisibleContacts = () => {
  const {contacts,filter} = this.state;
  return contacts.filter((contacts)=> contacts.name.toLowerCase().includes(filter.toLowerCase())) 
};

 deleteContact = (contactId) =>{
  this.setState(({contacts}) => ({
    contacts: contacts.filter(contact => contact.id !== contactId)
  }))
};

componentDidMount(){
  const contacts = localStorage.getItem('contacts');
  const parsedContacs = JSON.parse(contacts);
  if (parsedContacs) {
    this.setState({ contacts : parsedContacs });
 
  }
  console.log(contacts)
}

componentDidUpdate(prevProps,prevState){
 if( this.state.contacts !== prevState.contacts){
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
}


render(){
  const {contacts, filter} = this.state;
  return(
  <div>
      <h1>Phonebook</h1>
      <ContactForm AddContact = {this.addContact}/>

      <h2>Contacts</h2>
      {contacts.length > 1 && (
        <Filter value = {filter} onChange = {this.changeFilter} />
      )}
      {contacts.length > 0 && (
        <ContactList 
        contacts = {this.getVisibleContacts()}
        onDeleteContact = {this.deleteContact}/>
      ) }

  </div>

  )
}

}
export default App;

