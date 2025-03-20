import css from './ContactList.module.css';
import Contact from '../Contact/Contact.jsx';

export default function ContactListFunc({ phoneData }) {
  return (
    <ul className={css.ulbox}>
      {phoneData.map(phoneItem => (
        <li className={css.list} key={phoneItem.id}>
          <Contact peopleContact={phoneItem} />
        </li>
      ))}
    </ul>
  );
}
