
import { FormContacts } from './FormContacts/FormContacts.js';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'Redux/filterSlice.js';
import { addContact, deleteContacts } from 'Redux/contactsSlice.js';



export function App() {
 const contacts = useSelector(state => state.contacts)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const createContact = data => {
    const toFind = data.name.toLowerCase();
    if (contacts.find(item => item.name.toLowerCase() === toFind)) {
      alert(`${data.name} is alrady in contacts`);
    } else {
      const createContact = { ...data, id: nanoid() };

      dispatch(addContact(createContact));
    }
  };

  const changeFilter = e => {
    dispatch(addFilter(e.target.value))
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId))
  };

  const filterContact = () => {
    const normalizedName = filter.toLowerCase();
    const filterContact = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
    return filterContact;
  };

  return (
    <>
      <h2>Phone book</h2>
      <FormContacts createContact={createContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={filterContact()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}

export default App;
