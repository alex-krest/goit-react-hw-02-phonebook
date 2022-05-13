import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  contacnId = nanoid();

  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          //   display: 'flex',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}

        <div className="Phonebook">
          <h2>Phonebook</h2>
          <form>
            <label for user_name>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div className="Contacs">
          <h2>Contacs</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
