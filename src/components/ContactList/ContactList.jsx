import {
  Li,
  Ul,
  Button,
  Name,
  Number,
  Input,
  Label,
} from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/listSlice';
import { addFilter } from '../../redux/filterSlice';

const ContactList = () => {
  const contact = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  function delContact(submit) {
    dispatch(deleteContact(submit.target.id));
  }
  const filteredContacts = contact.data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Сontact search ..."
        onInput={event => {
          dispatch(addFilter(event.target.value));
        }}
      />
      <Ul>
        {filteredContacts.map(contact => (
          <Li key={contact.id}>
            <Name>{contact.name}:</Name>
            <Number>{contact.number}</Number>
            <Button
              id={contact.id}
              type="button"
              onClick={submit => {
                delContact(submit);
              }}
            >
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default ContactList;
