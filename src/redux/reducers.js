import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const items = createReducer([], {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),
   

});

const filter = createReducer('', {
    [filterContacts]: (state, action) => action.payload,
});

const rootReducer = combineReducers({
    items,
    filter,
});

export default rootReducer;
