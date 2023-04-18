
import { FormContacts } from './FormContacts/FormContacts.js';

import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';




export function App() {

  return (
    <>
      <h2>Phone book</h2>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter/>
      <ContactsList
       
     
      />
    </>
  );
}

export default App;
