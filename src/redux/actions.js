import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deletecontact');
export const filterContacts = createAction('contacts/filterContact');