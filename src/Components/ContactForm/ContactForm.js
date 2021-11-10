// import react, { Component } from "react";
import { useState } from 'react';
import shortid from 'shortid';
import f from './Contacts.module.css';
import { addContact } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


export default function InputForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);


  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

 const handleSubmit = e => {
   e.preventDefault();
   
      if (contacts.map(contact => contact.name).includes(name)) {
      alert(`Sorry,  ${name} is already in contacs.`);
      return;
    }
   
  
   const addContactOnSubmit = {
     name,
     number,
     id: shortid.generate(),
   }
   dispatch(addContact(addContactOnSubmit));
    setName('');
    setNumber('');

    };

   

  return (
     <div className={f.forma}>
          <form onSubmit={handleSubmit} >
          <label className={f.forma__label} htmlFor={nameInputId}>
            NAME
            <input className={f.forma__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={name}
                        onChange={handleInputChange}
                        id={nameInputId}
            />
          </label>

          <label className={f.forma__label} htmlFor={numberInputId} >
            NUMBER
            <input className={f.forma__input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={number}
                        onChange={handleInputChange}
                        id={numberInputId}
            />
          </label>

          <button className={f.forma__btn} type="submit">Add Contact</button>
        </form>
</div>
   )
}


