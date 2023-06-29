import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import './app.css';
import css from './components/Contacts/contacts.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

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

  filterChange = value => {
    this.setState({ filter: value });
  };

  onContactCreate = (name, number) => {
    const duplicateName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicateName) {
      alert('this name is in the contact list!!');
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    }));
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const onGetFilterData = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className="App">
        <AddContact onContactCreate={this.onContactCreate} />
        <h1 className={css.title}>Find contacts by name</h1>
        <Filter state={this.state} filterChange={this.filterChange} />
        <h1 class="main_title">Contacts</h1>
        {this.state.filter === '' ? (
          <Contacts
            contacts={this.state.contacts}
            onDeleteContact={this.onDeleteContact}
          />
        ) : (
          <Contacts contacts={onGetFilterData} />
        )}
      </div>
    );
  }
}
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  filterChange: PropTypes.func,
  onContactCreate: PropTypes.func,
  onDeleteContact: PropTypes.func,
};

export default App;
