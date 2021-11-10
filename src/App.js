import InputForm from './Components/ContactForm';
import { ContactList } from './Components/ContactList';
import Filter from './Components/FilterInput';
import s from './Components/ContactForm/Contacts.module.css';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function App() {
  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
