import axios from 'axios';
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './contacts/contactsSlice.js';

axios.defaults.baseURL = 'https://65264e9f917d673fd76bfd10.mockapi.io/api';

const fetchContacts = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/contacts');
    // Обробка даних

    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    // Обробка помилки
    dispatch(fetchingError(e.message));
  }
};

const addContactToBackend = contact => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    await axios.post('/contacts', contact);

    dispatch(fetchContacts());
  } catch (e) {
    dispatch(fetchingError(e.message));
    console.error(e);
  }
};

const deleteContactFromBackend = contactId => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    await axios.delete(`/contacts/${contactId}`);
    dispatch(fetchContacts());
  } catch (e) {
    dispatch(fetchingError(e.message));
    console.error(e);
  }
};

export { fetchContacts, addContactToBackend, deleteContactFromBackend };
