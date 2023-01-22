import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Wrapper, Title, SubTitle } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <ContactList />
    </Wrapper>
  );
}
