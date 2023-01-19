import { Form, Input, Label, Button } from './InputForm.styled';
import { addContact } from '../../redux/listSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export function InputForm() {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.data);
  function onSubmit(event) {
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contactList.find(cont => cont.name === name)) {
      alert(`${name} is already`);
      return;
    }
    dispatch(addContact(name, number));
  }
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(event, addContact);
        console.log(event.target);
        event.target.reset();
      }}
    >
      <div>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <Label>Number</Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </div>
      <Button>Add contact</Button>
    </Form>
  );
}
