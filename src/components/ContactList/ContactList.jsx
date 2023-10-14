import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { deleteContactFromBackend, fetchContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    if (!items) return;
    const lowerCaseFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };
  const contactsList = filterContacts();
  // console.log('contactsList', contactsList);

  return isLoading && !error ? (
    <p>Loading...</p>
  ) : (
    <ul className={css.list}>
      {items &&
        contactsList.map(contact => {
          const { id, name, phone } = contact;
          return (
            <li className={css.item} key={id}>
              <p>
                {name}: {phone}
              </p>

              <button
                type="button"
                onClick={() => {
                  dispatch(deleteContactFromBackend(id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
