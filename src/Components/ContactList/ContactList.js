
import ContactItem from './ContactTemplate'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getvisibleContacts } from '../../redux/selectors';

export default function ContactList() {
    const contacts = useSelector(getvisibleContacts);


    return (
        <ul > {
            contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
          
                />
            ))
        }
       
            </ul> 
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
}
 

