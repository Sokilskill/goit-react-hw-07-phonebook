import axios from 'axios';

axios.defaults.baseURL = 'https://65264e9f917d673fd76bfd10.mockapi.io/api';

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const postContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const deleteContactById = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
