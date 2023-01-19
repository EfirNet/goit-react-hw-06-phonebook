import { InputForm } from './InputForm/InputForm';
import { ContactList } from './ContactList/ContactList';
import { Wrapper, Title, SubTitle } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <InputForm />
      <SubTitle>Contacts</SubTitle>
      <ContactList />
    </Wrapper>
  );
}
