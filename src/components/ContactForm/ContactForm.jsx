import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/operations';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const getContact = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (getContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };
  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <div>
        <label className={css.textForm} htmlFor="" name="name">
          Name
        </label>
        <input
          className={css.textInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="" name="number">
          Number
        </label>
        <input
          className={css.textInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
        <button className={css.buttonForm} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
