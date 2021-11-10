import PropTypes from 'prop-types';
import s from './ContactList.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export default function ContactItem({ id, name, number }) {
    const dispatch = useDispatch();
    return (
        <>
        <li className={s.contact}>
            <span className={s.contact__item}>{name}</span>
            <span className={s.contact__item}>{number}</span>
             <button className={s.contact__btn}  type="button" onClick={() => dispatch(deleteContact(id))} >Delete</button>    
            </li>
        </>
        )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   
};