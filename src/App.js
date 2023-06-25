import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';

import './app.css';
import css from './components/Contacts/contacts.module.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onContactCreate = data => {
    this.setState({ name: data.name, number: data.number });

    const duplicateName = this.state.contacts
      .map(contact => contact.name)
      .includes(data.name);

    if (duplicateName) {
      alert('this name is in the contact list!!');
    } else {
      const newContact = {
        ...data,
        id: nanoid(),
      };
      this.setState({
        contacts: [...this.state.contacts, newContact],
      });
    }

    console.log(this.state.contacts);
  };


  onGetFilterData = filterData => {
    this.setState({ filter: filterData.filter });
    console.log(this.state.filter);
  };

  
  onDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  
  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div className="App">
        <AddContact
          contacts={contacts}
          name={name}
          number={number}
          onFormSubmit={this.onContactCreate}
        />
        <h1 className={css.title}>Contacts</h1>
        <Filter filter={filter} onGetFilterData={this.onGetFilterData} />
        <Contacts
          contacts={contacts}
          filter={filter}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
