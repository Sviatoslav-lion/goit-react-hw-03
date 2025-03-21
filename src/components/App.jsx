import { useState } from 'react';
import PhoneDB from '../phoneDB.json';
import ContactForm from './ContactForm/ContactForm.jsx';
import SearchBox from './SearchBox/SearchBox.jsx';
import ContactList from './ContactList/ContactList.jsx';
import './App.css';

function App() {
  return (
    <>
      <div>
        <h1 className="hi">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList phoneData={PhoneDB} />
      </div>
    </>
  );
}

export default App;
