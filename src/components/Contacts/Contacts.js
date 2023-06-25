import css from './contacts.module.css';

const Contacts = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.main}>
      <ul className={css.list}>
        {filteredContacts.map(contact => {
          return (
            <li className={css.list_item} key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className={css.delete_btn}
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
};

export default Contacts;
