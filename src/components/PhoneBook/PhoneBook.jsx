import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import css from './PhoneBook.module.css';
const Phonebook = () => {
  return (
    <>
      <div className={css.phonebook}>
        <ContactForm />
        <Filter />
        <h2 className={css.phonebookTitle}>Contacts:</h2>
        <ContactList />
      </div>
    </>
  );
};

export default Phonebook;
