import { useSelector, useDispatch } from 'react-redux';
import ContactsItem from '../../components/ContactsItem/ContactsItem ';
import css from './ContactList.module.css';
import { deleteContact } from '../../Redux/operations';
const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filter.trim().toLowerCase())
    );
  });

  const deleteConts = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <ContactsItem 
          key={contact.id}
          contact={contact}
          onDeleteContact={deleteConts }
        />
      ))}
    </ul>
  );
};

export default ContactList;