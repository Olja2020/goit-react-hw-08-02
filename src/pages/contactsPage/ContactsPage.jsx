import { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import { selectError, selectLoading } from "../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import Loader from "../components/loader/Loader";
import Error from "../components/error/Error";

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
