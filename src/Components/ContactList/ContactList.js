
import ContactItem from './ContactTemplate'
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';


export default function ContactList({  onDeleteContact }) {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);

    
    
    
  const getvisibleContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

    return (
        <ul > {
            getvisibleContacts(contacts,filter).map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))
        }
       
            </ul> 
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
}
 