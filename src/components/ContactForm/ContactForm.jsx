import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selector';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const { items } = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handlerInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        return;
      case 'phone':
        setPhone(value);
        return;
      default:
        return;
    }
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    const similarElement = element => element.name === name;
    if (items && items.find(similarElement)) {
      alert(name + ' is already in contacts.');
      return;
    }
    const newContact = { id: nanoid(), name, phone };
    dispatch(addContact(newContact));
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handlerFormSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          onChange={handlerInputChange}
          type="text"
          name="name"
          value={name}
          placeholder="Сергій - Serhii "
          // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          pattern="^[a-zA-Zа-яА-ЯєіїЄІЇ]+(([' \-][a-zA-Zа-яА-ЯєіїЄІЇ ])?[a-zA-Zа-яА-ЯєіїЄІЇ]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          onChange={handlerInputChange}
          type="tel"
          name="phone"
          value={phone}
          placeholder="099-123-45-67 - 0991234567"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
