import css from './ContactsItem.module.css';

const ContactsItem = ({ contact, onDeleteContact }) => (
<li className={css.contactsItem}>
    {contact.name} : {contact.number}
    <button
      className={css.buttonFilter}
      type="button"
      onClick={() => onDeleteContact(contact.id)}
    >
      Dalete
    </button>
  </li>
);


export default ContactsItem ;