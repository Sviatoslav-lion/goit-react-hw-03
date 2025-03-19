import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactListFunc({ phoneData }) {
  return (
    <ul>
      {phoneData.map(phoneItem => (
        <li key={phoneItem.id}>
          <Contact peopleContact={phoneItem} />
        </li>
      ))}
    </ul>
  );
}
