import css from './Contact.module.css';

export default function ContactItemFunc({ peopleContact }) {
  const { name = 'Unknown', number = 'unknown' } = peopleContact;
  return (
    <div className={css.cardItem}>
      <h3 className="visually-hidden">{name}</h3>
      <div>
        <p>
          <svg
            width="25px"
            height="25px"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16 16c2.947 0 5.333-2.387 5.333-5.333s-2.387-5.333-5.333-5.333c-2.947 0-5.333 2.387-5.333 5.333s2.387 5.333 5.333 5.333zM16 18.667c-3.56 0-10.667 1.787-10.667 5.333v1.333c0 0.733 0.6 1.333 1.333 1.333h18.667c0.733 0 1.333-0.6 1.333-1.333v-1.333c0-3.547-7.107-5.333-10.667-5.333z" />
          </svg>
          {name}
        </p>

        <p>
          <svg
            width="25px"
            height="25px"
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M19.635 18.487l-2.451-0.28c-0.589-0.067-1.167 0.135-1.582 0.55l-1.775 1.775c-2.731-1.389-4.969-3.618-6.359-6.359l1.785-1.785c0.415-0.415 0.618-0.994 0.55-1.582l-0.28-2.432c-0.116-0.975-0.936-1.708-1.92-1.708h-1.669c-1.090 0-1.997 0.907-1.93 1.997 0.511 8.24 7.102 14.821 15.332 15.332 1.090 0.068 1.997-0.839 1.997-1.93v-1.669c0.010-0.975-0.724-1.795-1.698-1.911z" />
          </svg>
          {number}
        </p>
      </div>
      <button>Delete</button>
    </div>
  );
}
