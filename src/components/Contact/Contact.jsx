import css from './Contact.module.css';

export default function ContactItemFunc({ peopleContact }) {
  const { name = 'Unknown', number = 'unknown' } = peopleContact;
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button>Delete</button>
    </div>
  );
}
