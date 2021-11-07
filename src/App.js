import { useState, useEffect } from 'react';
import InputForm from './Components/ContactForm';
import shortid from 'shortid';
import { ContactList } from './Components/ContactList';
import Filter from './Components/FilterInput';
import s from './Components/ContactForm/Contacts.module.css';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  // Добавляем контакты в локал сторедж
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onSubmitAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is alredy in contacts`);
    } else {
      const newContact = {
        id: shortid.generate(),
        name,
        number,
      };
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const filterContacts = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    setContacts(prevState =>
      prevState.filter(contact => {
        return contact.id !== id;
      }),
    );
  };

  const getvisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  console.log('contacts', contacts);
  console.log('getvisibleContacts()', getvisibleContacts());

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <InputForm addContactOnSubmit={onSubmitAddContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterContacts} />
      <ContactList
        onDeleteContact={deleteContact}
        contacts={getvisibleContacts()}
      />
    </div>
  );
}
