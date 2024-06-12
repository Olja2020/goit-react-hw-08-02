import { useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/loader/Loader";
import Error from "../../components/error/Error";

export default function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {isError && <Error message={"oops"} />}
      {isLoading && <Loader message={"loader"} />}
      <ContactList />
    </div>
  );
}
