import { Form, Input, Label, Button } from './ContactForm.styled';
import { addContact } from '../../redux/listSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(state => state.contacts.data);
  const onSubmit = event => {
    const name = event.target.elements.name.value;
    const phone = event.target.elements.phone.value;
    if (contactList.find(item => item.name === name)) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact(name, phone));
  };
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(event, addContact);
        event.target.reset();
      }}
    >
      <div>
        <div>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name ..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <Label>Number</Label>
          <Input
            type="tel"
            name="phone"
            placeholder="Enter phone number ..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
      </div>
      <Button>Add contact</Button>
    </Form>
  );
};

export default ContactForm;
