// import react, { Component } from "react";
import { useState } from 'react';
import shortid from 'shortid';
import f from './Contacts.module.css';


export default function InputForm({addContactOnSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 const nameInputId = shortid.generate();
 const numberInputId = shortid.generate();

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
        addContactOnSubmit(name, number)
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






// class InputForm extends Component {
//     state = {
//         name: '',
//         number: ''
//     }

//   handleInputChange = event => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };

// handleSubmit = e => {
//         e.preventDefault();
//   this.props.addContactOnSubmit(this.state)
//         this.reset();
//     };

//     reset = () => {
//         this.setState({
//             name: '',
//             number: ''
//         });
//     };
    
//     nameInputId = shortid.generate();
//     numberInputId = shortid.generate();

//     render() {
//         return (
//           <div className={f.forma}>
//           <form onSubmit={handleSubmit} >
//           <label className={f.forma__label} htmlFor={this.nameInputId}>
//             NAME
//             <input className={f.forma__input}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               value={this.state.name}
//                         onChange={this.handleInputChange}
//                         id={this.nameInputId}
//             />
//           </label>

//           <label className={f.forma__label} htmlFor={this.numberInputId} >
//             NUMBER
//             <input className={f.forma__input}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               value={this.state.number}
//                         onChange={this.handleInputChange}
//                         id={this.numberInputId}
//             />
//           </label>

//           <button className={f.forma__btn} type="submit">Add Contact</button>
//         </form>
// </div>
//         )
//     };
// };

// export default InputForm; 