import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilters = useSelector(selectNameFilter);

  const visibleName = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilters.toLowerCase())
  );
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
