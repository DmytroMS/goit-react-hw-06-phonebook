

    
 export const getvisibleContacts = ({items, filter}) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };