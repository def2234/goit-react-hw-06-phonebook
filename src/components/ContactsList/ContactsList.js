import { Btn } from './ContactsList-styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'Redux/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedName = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return (
    <ul>
      {filterContact.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Btn
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Btn>
          </li>
        );
      })}
    </ul>
  );
};
