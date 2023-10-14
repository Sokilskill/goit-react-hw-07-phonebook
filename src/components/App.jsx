import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import MainTitle from './MainTitle/MainTitle';

export const App = () => {
  return (
    <div className="container">
      <MainTitle title="Phonebook" />
      <ContactForm />
      <MainTitle title="Contacts" />
      <Filter />
      <ContactList />
    </div>
  );
};
