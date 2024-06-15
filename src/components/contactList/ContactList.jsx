import Contact from "../../components/contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
//import { selectContacts } from "../../redux/contacts/selectors";
import { selectVisibleName } from "../../redux/contacts/selectors";

export default function ContactList() {
  //const contacts = useSelector(selectContacts);
  //const nameFilters = useSelector(selectNameFilter);
  const visibleName = useSelector(selectVisibleName);
  // const visibleName = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(nameFilters.toLowerCase())
  // );
  return (
    <ul className={css.list}>
      {visibleName.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
