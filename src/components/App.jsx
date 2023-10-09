import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selector';
import { addContact } from 'redux/contacts/contactsSlice';
import contactsTemplate from '../data/contactsTemplate.json';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import MainTitle from './MainTitle/MainTitle';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [timer, setTimer] = useState(3);
  const [showTemplate, setShowTempalte] = useState(false);

  useEffect(() => {
    if (contacts.length === 0) {
      setShowTempalte(true);
      setTimer(3);
      const timerId = setInterval(
        () => setTimer(prevState => prevState - 1),
        1000
      );

      setTimeout(() => {
        clearInterval(timerId);
        setShowTempalte(false);
        dispatch(addContact(contactsTemplate));
      }, 3000);
    }
  }, [contacts, dispatch]);

  return (
    <div className="container">
      <MainTitle title="Phonebook" />
      <ContactForm />
      <MainTitle title="Contacts" />
      <Filter />
      {showTemplate ? (
        <>
          <p>
            You don't have any saved contacts, templates for contacts will be
            loaded
          </p>
          <p>
            Ви не маєте збережених контактів, будуть завантажені шаблони
            контактів
          </p>
          <p>{timer}</p>
        </>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
